import { PlusIcon } from '@radix-ui/react-icons';

interface IProps {
  icon: string;
}
const DynamicIcon = (props: IProps) => {
  switch (props.icon) {
    case 'plus':
      return <PlusIcon fontSize={12} />;

    default:
      break;
  }
};

export default DynamicIcon;
