import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const ChannelLink = (props: any) => {
  const match = useRouteMatch(props.to);
  return (
    <Link
      to={props.to}
      className={
        'team-sidebar__channel-link py-1 px-4 no-underline block' +
        (match ? 'font-bold bg-teal-700 text-gray-200' : '')
      }
    >
      <span aria-hidden="true"># </span>
      {props.channel.name}
    </Link>
  );
};

export default ChannelLink;
