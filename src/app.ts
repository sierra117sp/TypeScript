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

function calcularEdad(fechaNacimiento: string): EdadResultado { // ← Faltaba ": EdadResultado"
    if (!validarFormatoFecha(fechaNacimiento)) {
        throw new Error('Formato de fecha invalido. Use YYYY-MM-DD');
    }

    const fechaNac: Date = new Date(fechaNacimiento);
    const fechaHoy: Date = new Date();

    if (fechaNac > fechaHoy) {
        throw new Error('La fecha de nacimiento no puede ser futura');
    }

    let años: number = fechaHoy.getFullYear() - fechaNac.getFullYear();
    let meses: number = fechaHoy.getMonth() - fechaNac.getMonth();
    let dias: number = fechaHoy.getDate() - fechaNac.getDate(); // ← Era fechaNac - fechaNac

    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    return {
        años,
        meses,
        dias,
        fechaNacimiento: formatearFecha(fechaNac),
        fechaActual: formatearFecha(fechaHoy)
    };
}

/**
 * Valida que la fecha tenga el formato correcto YYYY-MM-DD
 * @param fecha - String de fecha a validar
 * @returns boolean indicando si el formato es válido
 */

function validarFormatoFecha(fecha: string): boolean {
    const regex: RegExp = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(fecha)) return false;

    const fechaObj = new Date(fecha);
    return fechaObj instanceof Date && !isNaN(fechaObj.getTime());
}


/**
 * Formatea una fecha a string legible
 * @param fecha - Objeto Date
 * @returns String formateado de la fecha
 */

function formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Función para mostrar el resultado de manera legible
 * @param resultado - Objeto EdadResultado
 */

function mostrarResultado(resultado: EdadResultado): void {
    console.log('='.repeat(50));
    console.log('📅 Calculadora de Edad');
    console.log('='.repeat(50));
    console.log(`Fecha de nacimiento: ${resultado.fechaNacimiento}`);
    console.log(`Fecha actual: ${resultado.fechaActual}`);
    console.log(`Edad exacta: ${resultado.años} años, ${resultado.meses} meses y ${resultado.dias} días`);
    console.log('='.repeat(50));
}


function main(): void {
    try {
        const args: string[] = process.argv.slice(2);

        if (args.length === 0) {
            console.log('❌ Error: Debe proporcionar una fecha de nacimiento');
            console.log('Uso: node dist/app.js YYYY-MM-DD');
            console.log('Ejemplo: node dist/app.js 1990-05-15');
            return;
        }

        const fechaNacimiento: string = args[0];
        const resultado: EdadResultado = calcularEdad(fechaNacimiento);
        mostrarResultado(resultado);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`❌ Error: ${error.message}`);
        } else {
            console.error('❌ Error desconocido');
        }
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

export { calcularEdad, validarFormatoFecha, EdadResultado };