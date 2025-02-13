import IssuesStatusBadge from '@/app/components/IssuesStatusBadge';
import { prisma } from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react';
import ReactmarkDown from 'react-markdown'

interface Props {
  params: { id: string };
}

const IssuesDetailPage = async ({ params }: Props) => {
    
        
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    notFound()
  }

  return (
    <div>
     <Heading>{issue.title}</Heading>
     <Flex my='3' className='space-x-3'>
     <IssuesStatusBadge status={issue.status}/>
     <Text>{issue.createdAt.toDateString()}</Text>
     </Flex>
     <Card className='prose mt-5'>
     <ReactmarkDown>{issue.description}</ReactmarkDown>
     </Card>

    </div>
  );
};

export default IssuesDetailPage;
