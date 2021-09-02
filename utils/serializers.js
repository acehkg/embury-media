import { Text, Heading, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from './sanity';
import DisplayImage from '../components/images/DisplayImage';
import BlockImage from '../components/images/BlockImage';
//custom serializer to render block of text
export const BlockRenderer = (props) => {
  const { style } = props.node;

  switch (style) {
    case 'normal':
      return <Text pb='2rem'>{props.children}</Text>;
      break;
    case 'h1':
      return (
        <Heading as='h1' fontSize='2.5rem' py='1rem'>
          {props.children}
        </Heading>
      );
      break;
    case 'h2':
      return (
        <Heading as='h2' fontSize='2rem' py='1rem'>
          {props.children}
        </Heading>
      );
      break;
    case 'h3':
      return (
        <Heading as='h3' fontSize='1.5rem' py='1rem'>
          {props.children}
        </Heading>
      );
      break;
    default:
      return BlockContent.defaultSerializers.types.block(props);
  }
};
//custom serializer for link
export const ExternaLink = ({ mark, children }) => {
  return (
    <Link
      fontWeight='bold'
      textDecoration='underline'
      href={mark.href}
      target='_blank'
      rel='noopener'
    >
      {children} <HiExternalLink style={{ display: 'inline' }} />
    </Link>
  );
};
//custome serializer for em
export const EmphasizedText = ({ children }) => {
  const styles = {
    color: 'var(--chakra-colors-brandPink-100)',
    fontStyle: 'normal',
    fontWeight: 'bold',
  };
  return <span style={styles}>{children}</span>;
};

//custom list serializer
export const ListItems = ({ children }) => {
  const styles = {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    marginLeft: '1rem',
  };
  return <li style={styles}>{children}</li>;
};

//custom image serializer for Body Image
export const BodyImage = ({ node }) => {
  return <BlockImage image={node} height={node.height} width={node.width} />;
};
