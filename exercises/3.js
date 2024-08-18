let names = [
  'Nqn Ybirynpr',
  'Tenpr Ubccre',
  'Nqryr Tbyqfgvar',
  'Nyna Ghevat',
  'Puneyrf Onoontr',
  'Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv',
  'Wbua Ngnanfbss',
  'Ybvf Unvog',
  'Pynhqr Funaaba',
  'Fgrir Wbof',
  'Ovyy Tngrf',
  'Gvz Orearef-Yrr',
  'Fgrir Jbmavnx',
  'Xbaenq Mhfr',
  'Fve Nagbal Ubner',
  'Zneiva Zvafxl',
  'Lhxvuveb Zngfhzbgb',
  'Unllvz Fybavzfxv',
  'Tregehqr Oynapu'
]

const conversions = {
  a: 'n',
  b: 'o',
  c: 'p',
  d: 'q',
  e: 'r',
  f: 's',
  g: 't',
  h: 'u',
  i: 'v',
  j: 'w',
  k: 'x',
  l: 'y',
  m: 'z',
  n: 'a',
  o: 'b',
  p: 'c',
  q: 'd',
  r: 'e',
  s: 'f',
  t: 'g',
  u: 'h',
  v: 'i',
  w: 'j',
  x: 'k',
  y: 'l',
  z: 'm',
}


function decipher(name) {
  let letters = name.split('')
  let translation = letters.map(letter => {
    if (letter === ' ') return ' ';
    let isUpper = (letter >= 'A' && letter <= 'Z')

    letter = conversions[letter.toLowerCase()];

    return isUpper ? letter.toUpperCase() : letter;
  })

  return translation.join('')
}

for (let index = 0; index < names.length; index++) {
  console.log(
    decipher(names[index])
  )
}
