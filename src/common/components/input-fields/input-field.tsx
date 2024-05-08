import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChangeEvent } from 'react';

interface IProps {
  label?: string;
  placeholder: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  type?: string;
  value?: string;
  errMsg?: string;
}

const InputFields = (props: IProps) => {
  return (
    <>
      <div className='grid gap-2'>
        {props.label && (
          <Label htmlFor={props.placeholder}>{props.label}</Label>
        )}
        <Input
          value={props.value}
          type={props.type || 'text'}
          id={props.placeholder}
          placeholder={props.placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.onChange(e.target.value)
          }
          onBlur={(e: ChangeEvent<HTMLInputElement>) =>
            props.onBlur && props.onBlur(e.target.value)
          }
        />
        {props.errMsg && (
          <small className='text-xs text-destructive'>{props.errMsg}</small>
        )}
      </div>
    </>
  );
};

export default InputFields;
