import {
  Text,
  Heading,
  Link,
  ListItem,
  ListIcon,
  List,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { HiExternalLink } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import BlockContent from '@sanity/block-content-to-react';
import BlockImage from '../components/images/BlockImage';
//custom serializer to render block of text
export const BlockRenderer = (props) => {
  const { style } = props.node;

  switch (style) {
    case 'normal':
      return <Text py='1rem'>{props.children}</Text>;
      break;
    case 'h1':
      return (
        <Heading as='h1' fontSize='2.5rem' py='2rem'>
          {props.children}
        </Heading>
      );
      break;
    case 'h2':
      return (
        <Heading as='h2' fontSize='2rem' py='2rem'>
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
      target={mark.blank ? '_blank' : ''}
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

//custom lists serializers
export const ContentList = ({ children }) => {
  return (
    <List spacing={8} py='1rem'>
      {children}
    </List>
  );
};

export const ListItems = ({ node, children }) => {
  const { listItem } = node;
  switch (listItem) {
    case 'checkmark':
      return (
        <ListItem>
          <ListIcon as={CheckIcon} color='inherit' /> {children}
        </ListItem>
      );
      break;
    case 'xmark':
      return (
        <ListItem>
          <ListIcon as={CloseIcon} color='inherit' />
          {children}
        </ListItem>
      );
      break;

    default:
      return (
        <ListItem>
          <ListIcon as={GoPrimitiveDot} />
          {children}
        </ListItem>
      );
  }
};

//custom image serializer for Body Image
export const BodyImage = ({ node }) => {
  return (
    <BlockImage
      image={node}
      height={node.height}
      width={node.width}
      py={{ base: '2rem', lg: '4rem' }}
    />
  );
};
