import React from 'react';
import {SvgXml, SvgProps} from 'react-native-svg';

import CalendarIcon from '@Assets/Svg/Calendar.svg';

interface ISVGProps extends SvgProps {
  xml: any;
}

export default function SvgXmlString(props: ISVGProps) {
  return <SvgXml {...props} xml={props.xml} />;
}

export {CalendarIcon};
