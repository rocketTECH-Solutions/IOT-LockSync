import { Button } from '@/components/ui/button';
import DynamicIcon from '@/components/ui/icons';
import Spinner from '@/components/ui/spinner';

interface IProps {
  onClick: () => Promise<void>;
  iconName?: string;
  label?: string;
  class?: string;
  type?: 'button' | 'submit' | 'reset';
  disable?: boolean;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

const ButtonComponent = (props: IProps) => {
  return (
    <>
      <Button
        type={props.type || 'button'}
        className={`gap-2 ${props.class}`}
        onClick={props.onClick}
        variant={props.variant}
        disabled={props.disable}
        size={props.size}
      >
        {props.disable && <Spinner size='4' />}
        {props.iconName && <DynamicIcon icon={props.iconName} />}
        {props.label}
        <span className='sr-only'></span>
      </Button>
    </>
  );
};

export default ButtonComponent;
