import * as XLSX from 'xlsx';

// Definición del tipo para los datos del jugador
export interface PlayerData {
  Nombre: string;
  Victorias: number;
  Derrotas: number;
  Goles: number;
}

/**
 * Convierte un archivo Excel a JSON
 * @param file - Archivo Excel
 * @returns Array de objetos JSON con tipado PlayerData
 */
export const parseExcelToJson = async (file: File): Promise<PlayerData[]> => {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};
