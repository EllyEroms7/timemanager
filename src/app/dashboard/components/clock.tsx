import clsx from "clsx";
import styles from "./styles/clock.module.scss";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { CircularProgress } from "@heroui/react";
import { Button, ButtonGroup } from "@heroui/react";

const Clock = () => {
  return (
    <div className={clsx(styles.clock)}>
      <Card
        className={clsx(
          styles.card,
          "bg-background/25",
          "rounded-lg",
          "shadow-primary/25"
        )}
        isBlurred
      >
        <CardBody className="flex">
          <div className="controls">
            <div className="buttons">
              <ButtonGroup>
                <Button>Start</Button>
                <Button>Stop</Button>
              </ButtonGroup>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Clock;
