import React from 'react'; // we need this to make JSX compile

type CardProps = {
  title: string,
  paragraph: string
}

export const Card = ({ title, paragraph }: CardProps) => <div>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
</div>

const el = <Card title="Welcome!" paragraph="To this example" />
