# Calculadora de Edad en TypeScript

Una aplicación simple que calcula la edad exacta de una persona basada en su fecha de nacimiento.

## Características

- ✅ Calcula años, meses y días exactos
- ✅ Validación de formato de fecha
- ✅ Manejo de errores
- ✅ Tipado estricto con TypeScript
- ✅ Interfaz de línea de comandos

## Instalación

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Compila el proyecto: `npm run build`

## Uso

```bash
npm start YYYY-MM-DD

# Ejemplo:
npm start 1990-05-15
# Calculadora de Edad en TypeScript

Una aplicación de línea de comandos que calcula la edad exacta de una persona (años, meses y días) basada en su fecha de nacimiento.

## 📋 Descripción

Este proyecto fue desarrollado como ejercicio de aprendizaje de TypeScript. La aplicación toma una fecha de nacimiento en formato YYYY-MM-DD y calcula la edad exacta hasta la fecha actual.

## ✨ Características

- Calcula edad en años, meses y días exactos
- Validación de formato de fecha YYYY-MM-DD
- Manejo de errores (fechas futuras, formatos incorrectos)
- Código TypeScript con tipado estricto
- Interfaz de línea de comandos simple

## 🔧 Requisitos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)
- TypeScript (se instala automáticamente)

## 📦 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/calculadora-edad-typescript.git
cd calculadora-edad-typescript
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Compilar TypeScript:**
```bash
npx tsc
```

## 🚀 Uso

### Ejecutar la aplicación:
```bash
node dist/app.js YYYY-MM-DD
```

### Ejemplos:
```bash
# Calcular edad de persona nacida el 15 de mayo de 1990
node dist/app.js 1990-05-15

# Calcular edad de persona nacida el 25 de diciembre de 1985  
node dist/app.js 1985-12-25

# Calcular edad de persona nacida el 1 de enero de 2000
node dist/app.js 2000-01-01
```

## 📖 Ejemplo de salida

```
==================================================
📅 Calculadora de Edad
==================================================
Fecha de nacimiento: 15 de mayo de 1990
Fecha actual: 6 de septiembre de 2025
Edad exacta: 35 años, 3 meses y 22 días
==================================================
```

## ⚠️ Casos de error

```bash
# Sin proporcionar fecha
node dist/app.js
# Salida: ❌ Error: Debe proporcionar una fecha de nacimiento

# Formato incorrecto
node dist/app.js 15-05-1990
# Salida: ❌ Error: Formato de fecha invalido. Use YYYY-MM-DD

# Fecha futura
node dist/app.js 2030-01-01
# Salida: ❌ Error: La fecha de nacimiento no puede ser futura
```


## 🔨 Comandos de desarrollo

```bash
# Compilar TypeScript una vez
npx tsc

# Compilar en modo watch (recompila automáticamente)
npx tsc --watch

# Limpiar carpeta dist
rm -rf dist
```

## 💻 Tecnologías utilizadas

- **TypeScript** - Lenguaje de programación con tipado estático
- **Node.js** - Entorno de ejecución JavaScript
- **npm** - Gestor de paquetes

## 🧪 Casos de prueba

Para verificar que todo funciona correctamente, prueba estos casos:

```bash
# Casos válidos
node dist/app.js 1990-05-15
node dist/app.js 1985-12-25  
node dist/app.js 2000-01-01
node dist/app.js 1995-02-29  # Año bisiesto

# Casos de error
node dist/app.js             # Sin argumentos
node dist/app.js 15-05-1990  # Formato DD-MM-YYYY
node dist/app.js 1990/05/15  # Formato con barras
node dist/app.js 2030-01-01  # Fecha futura
node dist/app.js abc-def-ghi # Texto inválido
```

## 📚 Conceptos TypeScript aplicados

Este proyecto demuestra:

- **Interfaces** - `EdadResultado` para tipear el objeto de retorno
- **Tipos básicos** - `string`, `number`, `boolean`, `Date`
- **Funciones tipadas** - Parámetros y valores de retorno tipados
- **Manejo de errores** - `try/catch` con tipos `unknown`
- **Validaciones** - RegEx para validar formato de fecha
- **Módulos** - `export` e `import` de funciones

## 👨‍💻 Autor

**[Tu Nombre]**
- GitHub: (https://github.com/sierra117sp)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

⭐ **¡Dale una estrella si te sirvió este proyecto!** ⭐