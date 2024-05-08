import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface IProps {
  children: React.ReactNode;
  desc?: string;
  title: string;
  titleSize?: string;
  headerClass?: string;
  cardClass?: string;
  center?: boolean;
  bold?: boolean;
}

const CardComponent = (props: IProps) => {
  return (
    <>
      <Card className={props.center ? `mx-auto max-w-sm` : props.cardClass}>
        <CardHeader className={props.headerClass}>
          <CardTitle
            className={`text-${props.titleSize || 'xl'} font-${
              props.bold ? 'bold' : 'medium'
            }`}
          >
            {props.title}
          </CardTitle>
          {props.desc && <CardDescription>{props.desc}</CardDescription>}
        </CardHeader>
        <CardContent>{props.children}</CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
