import { Grid } from "@ui/Grid";
import { GridItem } from "@ui/GridItem";
import { Container } from "@ui/Container";
import { Card } from "@ui/Card";

const Loading = () => {
  return (
    <Container className="my-8">
      <Grid space={3}>
        {[...new Array(20)].map((_, idx) => (
          <GridItem key={idx} size={2} className="animate-puls">
            <Card className="rounded p-4">
              <div className="mx-auto w-[180px] h-[180px]"></div>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Loading;
