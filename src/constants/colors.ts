export const Light = {
  c1: '#7a18e3',
  c2: '#691abf',
  c3: '#581a9d',
  c4: '#48197b',
  c5: '#37165c',
  c6: '#28133e',
  c7: '#190c22',
} as const;

export const Dark = {
  c1: '#a218f6',
  c2: '#b349f8',
  c3: '#c36bfa',
  c4: '#d28afc',
  c5: '#dfa8fe',
  c6: '#ebc5ff',
  c7: '#f5e2ff',
} as const;

export const BlackShades = {
  opacity0: '#00000000',
  opacity1: '#00000011',
  opacity2: '#00000022',
  opacity3: '#00000033',
  opacity4: '#00000044',
  opacity5: '#00000055',
  opacity6: '#00000066',
  opacity7: '#00000077',
  opacity8: '#00000088',
  opacity9: '#00000099',
  opacityA: '#000000aa',
  opacityB: '#000000bb',
  opacityC: '#000000cc',
  opacityD: '#000000dd',
  opacityE: '#000000ee',
  opacityF: '#000000ff',
  slightBlack: '#111111',
} as const;

export const WhiteShades = {
  opacity0: '#ffffff00',
  opacity1: '#ffffff11',
  opacity2: '#ffffff22',
  opacity3: '#ffffff33',
  opacity4: '#ffffff44',
  opacity5: '#ffffff55',
  opacity6: '#ffffff66',
  opacity7: '#ffffff77',
  opacity8: '#ffffff88',
  opacity9: '#ffffff99',
  opacityA: '#ffffffaa',
  opacityB: '#ffffffbb',
  opacityC: '#ffffffcc',
  opacityD: '#ffffffdd',
  opacityE: '#ffffffee',
  opacityF: '#ffffffff',
  slightWhite: '#eeeeee',
} as const;

export const GreyShades = {
  opacity0: '#3A3A3A00',
  opacity1: '#3A3A3A11',
  opacity2: '#3A3A3A22',
  opacity3: '#3A3A3A33',
  opacity4: '#3A3A3A44',
  opacity5: '#3A3A3A55',
  opacity6: '#3A3A3A66',
  opacity7: '#3A3A3A77',
  opacity8: '#3A3A3A88',
  opacity9: '#3A3A3A99',
  opacityA: '#3A3A3Aaa',
  opacityB: '#3A3A3Abb',
  opacityC: '#3A3A3Acc',
  opacityD: '#3A3A3Add',
  opacityE: '#3A3A3Aee',
  opacityF: '#3A3A3Aff',
} as const;

const Colors = {
  white: WhiteShades,
  grey: GreyShades,
  black: BlackShades,
  placeholderPrimaryColor: '#3907ff80',
  placeholderSecondaryColor: '#0054db80',
  placeholderColor: '#00000080',
  redError: '#B00020',
  placeholderError: '#B0002080',
};

export default Colors;