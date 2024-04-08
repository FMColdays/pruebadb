import type { APIRoute } from 'astro'
import { db, DATOS, eq, NOW } from 'astro:db'

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData()
  const nombre = formData.get('nombre')
  const correo = formData.get('correo')
  const empresa = formData.get('empresa')
  const mensaje = formData.get('mensaje')
  const create_a = NOW
  console.log("Hola")
  if (
    typeof nombre === 'string' &&
    typeof correo === 'string' &&
    typeof empresa === 'string' &&
    typeof mensaje === 'string'
  ) {
    await db
      .insert(DATOS)
      .values({ nombre, correo, empresa, mensaje, create_a })
  }

  return redirect('/')
}

export const PUT: APIRoute = async ({ params, request, redirect }) => {
  const { nombre } = params
  const formData = await request.formData()
  const n = formData.get('nombreA')
  const correo = formData.get('correoA')
  const empresa = formData.get('empresaA')
  const mensaje = formData.get('mensajeA')

  if (
    typeof n === 'string' &&
    typeof correo === 'string' &&
    typeof empresa === 'string' &&
    typeof mensaje === 'string'
  ) {
    await db
      .update(DATOS)
      .set({ nombre: n, correo, empresa, mensaje })
      .where(eq(DATOS.id, nombre))
  }
  return redirect('/')
}

export const DELETE: APIRoute = async ({ params, redirect }) => {
  const { nombre } = params
  await db.delete(DATOS).where(eq(DATOS.nombre, nombre))
  return redirect('/')
}
