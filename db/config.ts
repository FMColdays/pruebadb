import { column, defineDb, defineTable } from 'astro:db'

const DATOS = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    correo: column.text(),
    empresa: column.text(),
    mensaje: column.text(),
    create_a: column.date(),
  },
})

export default defineDb({
  tables: { DATOS },
})
