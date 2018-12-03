const countOfChar = (s, c) => (s.match(new RegExp(c, 'g'))||[]).length
const isMononym = nameParts => (nameParts.length === 1)
const lastName = name => (parts(name)[1])
const firstName = name => (parts(name)[0])
const parts = name => name.split(' ')

export const normalize = name => {
  if(name === '') return ''
  const nameParts = name.trim().split(' ')
  if(isMononym(nameParts)) return name
  if(nameParts.length === 2)
    return `${lastName()}, ${nameParts[0]}`
  // if(nameParts.length === 3)

}
