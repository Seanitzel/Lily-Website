export async function newsLetterSignUp(email) {
  const GenericDB = await import('@/firebase/generic-db')
  const db        = new GenericDB.default('news-letter')
  const key       = email.split('@')[0].replace(/\./g, '')
  db.update({
    id:    'emails',
    [key]: email,
  })
}
