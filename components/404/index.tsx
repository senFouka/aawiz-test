import { Container, Group, Title } from '@mantine/core';
import Link from 'next/link';
import Paths from '@/routes/path';
import { Illustration } from './Illustration';
import classes from './index.module.scss';
import Button from '../button';





export default function NothingFoundBackground() {
    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <Illustration className={classes.image} />
                <div className={classes.content}>
                    <Title className={classes.title}>Noting Found</Title>

                    <Group justify="center">
                        <Link href={Paths.HOME_PATH}>
                            <Button size="md">Return to Home</Button>
                        </Link>
                    </Group>
                </div>
            </div>
        </Container>
    );
}