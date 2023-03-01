type TextBody = 'BodyXLarge' | 'BodyLarge' | 'BodyMedium' | 'BodySmall' | 'BoxyXSmall';
type TextBodyWeight = 'Bold' | 'SemiBold' | 'Medium' | 'Regular';
type TextBodyVariants = `${TextBody}${TextBodyWeight}`;

type TextVariantHeading = 'Heading1' | 'Heading2' | 'Heading3' | 'Heading4' | 'Heading5' | 'Heading6';

type TextVariant = TextVariantHeading | TextBodyVariants;

type TextVariantProps = {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
};

const fontFamilyList = ['Bold', 'SemiBold', 'Medium', 'Regular'] as const;

export const textVariants: Partial<Record<TextVariant, TextVariantProps>> = {
  Heading1: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 58,
  },
  Heading2: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 48,
  },
  Heading3: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  Heading4: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.8,
  },
  Heading5: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  Heading6: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
  },
};

const mapFontWeight: Record<TextBodyWeight, string> = {
  Bold: '700',
  SemiBold: '600',
  Medium: '500',
  Regular: '400',
};

fontFamilyList.forEach((item) => {
  const fontFamily = `Urbanist-${item}`;
  const fontWeight = mapFontWeight[item];
  textVariants[`BodyXLarge${item}` as TextVariant] = {
    fontFamily,
    fontSize: 18,
    fontWeight,
    lineHeight: 25.2,
  };
  textVariants[`BodyLarge${item}` as TextVariant] = {
    fontFamily,
    fontSize: 16,
    fontWeight,
    lineHeight: 22.4,
  };
  textVariants[`BodyMedium${item}` as TextVariant] = {
    fontFamily,
    fontSize: 14,
    fontWeight,
    lineHeight: 19.6,
  };
  textVariants[`BodySmall${item}` as TextVariant] = {
    fontFamily,
    fontSize: 12,
    fontWeight,
    lineHeight: 14.4,
  };
  textVariants[`BoxyXSmall${item}` as TextVariant] = {
    fontFamily,
    fontSize: 10,
    fontWeight,
    lineHeight: 12,
  };
});
