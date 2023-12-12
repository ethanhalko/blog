import {Tooltip} from '@fluentui/react-components';

type Props = { label: string, content: string, icon: string, path: string, newTab?: boolean };
export default function NavIcon({label, content, icon, path, newTab = false}: Props) {
  return (
    <Tooltip content={content} relationship={'label'} withArrow={true}>
      <a href={path} aria-label={label} target={newTab ? '_blank' : '_self'}>
        <div className={`${icon} text-5xl`}/>
      </a>
    </Tooltip>
  )
}
