export const Light = {
  purple10: '#7a18e3',
  purple20: '#691abf',
  purple30: '#581a9d',
  purple40: '#48197b',
  purple50: '#37165c',
  purple60: '#28133e',
  purple70: '#190c22',
  error: '#D00020',
  placeholder: '#00000080',
  focusedPlaceholder: '#7a18e380',
  placeholderError: '#B0002080',
} as const;

export const LightOpacity = {
  purple10opacity10: `${Light.purple10}10`,
  purple10opacity15: `${Light.purple10}15`,
  purple10opacity20: `${Light.purple10}20`,
};

export const Dark = {
  purple10: '#a218f6',
  purple20: '#b349f8',
  purple30: '#c36bfa',
  purple40: '#d28afc',
  purple50: '#dfa8fe',
  purple60: '#ebc5ff',
  purple70: '#f5e2ff',
  error: '#C00020ee',
  placeholder: '#ffffff80',
  focusedPlaceholder: '#a218f680',
  placeholderError: '#B0002080',
} as const;

export const DarkOpacity = {
  purple10opacity15: `${Dark.purple10}15`,
  purple10opacity20: `${Dark.purple10}20`,
  purple10opacity10: `${Dark.purple10}10`,
};

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
  black11: '#111111',
  black20: '#202020',
  black30: '#303030',
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
  whiteEe: '#eeeeee',
  whiteDF: '#dfdfdf',
  whiteCd: '#cdcdcd',
} as const;

export const DarkGreyShades = {
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

export const LightGreyShades = {
  opacity0: '#9A9A9A00',
  opacity1: '#9A9A9A11',
  opacity2: '#9A9A9A22',
  opacity3: '#9A9A9A33',
  opacity4: '#9A9A9A44',
  opacity5: '#9A9A9A55',
  opacity6: '#9A9A9A66',
  opacity7: '#9A9A9A77',
  opacity8: '#9A9A9A88',
  opacity9: '#9A9A9A99',
  opacityA: '#9A9A9Aaa',
  opacityB: '#9A9A9Abb',
  opacityC: '#9A9A9Acc',
  opacityD: '#9A9A9Add',
  opacityE: '#9A9A9Aee',
  opacityF: '#9A9A9Aff',
} as const;

const Colors = {
  white: WhiteShades,
  lightGrey: LightGreyShades,
  darkGrey: DarkGreyShades,
  black: BlackShades,
  red: '#ff0000',
  transparent: '#00000000',
};

export default Colors;
