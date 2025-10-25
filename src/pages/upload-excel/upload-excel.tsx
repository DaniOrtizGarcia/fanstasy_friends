import { useRef, useState } from 'react';
import './upload-excel.scss';
import { Link } from 'react-router-dom';
import { parseExcelToJson, type PlayerData } from '../../utils/excel-parser';
import { db, collection, writeBatch, doc, getDocs, deleteDoc } from '../../firebase';

export const UploadExcelPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [excelData, setExcelData] = useState<PlayerData[]>([]);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const jsonData = await parseExcelToJson(file);
      setExcelData(jsonData);
      console.log('Datos convertidos a JSON:', jsonData, excelData);
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsPasswordCorrect(event.target.value === 'SubirExcel54');
  }

  const handleUploadToFirebase = async () => {
    if (excelData.length === 0) {
      alert('No hay datos para subir');
      return;
    }

    try {
      // 1. Eliminar todos los datos existentes
      const playersCollection = collection(db, 'cojos-fantasy');
      const existingDocs = await getDocs(playersCollection);
      
      for (const docSnapshot of existingDocs.docs) {
        await deleteDoc(docSnapshot.ref);
      }

      // 2. Guardar los nuevos datos
      const batch = writeBatch(db);
      excelData.forEach((player) => {
        const playerDoc = doc(playersCollection);
        batch.set(playerDoc, player);
      });

      await batch.commit();
      alert('Datos subidos exitosamente a Firebase');
    } catch (error) {
      console.error('Error al subir datos:', error);
      alert('Error al subir datos a Firebase');
    }
  }
  

  return (
    <section className="upload-excel">
      <section className="upload-excel__header">
        <Link className="upload-excel__header-link" to="/home">Volver</Link>
      </section>

      <section className="upload-excel__content">
        <h1>Subir Excel</h1>
        <input className='upload-excel__content-password' type="text" value={password} onChange={handlePasswordChange} />
        <input 
          ref={fileInputRef}
          className='upload-excel__content-input' 
          type="file" 
          accept=".xlsx .xls" 
          onChange={handleFileChange}
        />
        <button 
          className='upload-excel__content-button' 
          onClick={handleButtonClick}
          type="button"
          disabled={!isPasswordCorrect}
        >
          Seleccionar archivo Excel
        </button>
        
        {excelData.length > 0 && (
          <button 
            className='upload-excel__content-button' 
            onClick={handleUploadToFirebase}
            type="button"
            disabled={!isPasswordCorrect}
          >
            Subir a Firebase
          </button>
        )}
      </section>
      
    </section>
  )
}

export default UploadExcelPage;