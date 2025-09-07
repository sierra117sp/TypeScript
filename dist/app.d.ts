interface EdadResultado {
    años: number;
    meses: number;
    dias: number;
    fechaNacimiento: string;
    fechaActual: string;
}
/**
 * Función principal que calcula la edad basada en una fecha de nacimiento
 * @param fechaNacimiento - Fecha en formato YYYY-MM-DD
 * @returns Objeto con información detallada de la edad
 */
declare function calcularEdad(fechaNacimiento: string): EdadResultado;
/**
 * Valida que la fecha tenga el formato correcto YYYY-MM-DD
 * @param fecha - String de fecha a validar
 * @returns boolean indicando si el formato es válido
 */
declare function validarFormatoFecha(fecha: string): boolean;
export { calcularEdad, validarFormatoFecha, EdadResultado };
//# sourceMappingURL=app.d.ts.map