import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';

const Post = () => {
  return (
    <Container>
      <Box mb={3}>
        <Typography variant="h4" component="h1">
          China's top leader begins a norm-breaking third term with an
          even greater concentration of power, after retiring key
          party leaders and elevating
        </Typography>
        <Stack direction="right" mt={2} gap={2} alignItems="center">
          <Chip label="Anime" color="error" />

          <Typography variant="subtitle1" color="text.secondary">
            Feb 21, 2022
          </Typography>
        </Stack>
      </Box>

      {[...Array(3)].map(e => (
        <Box mb={3}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quibusdam aliquid recusandae distinctio, numquam
            aspernatur repellat totam consequatur veniam enim optio ab
            commodi dicta facere! Perferendis odit soluta
            exercitationem fuga suscipit! Accusamus, reprehenderit
            aperiam temporibus labore, voluptates alias rem porro
            fugiat, qui cumque voluptas mollitia quasi explicabo
            eveniet dignissimos tenetur laudantium! Sapiente ex
            suscipit consequatur sunt, quaerat placeat veritatis
            assumenda dolores. Voluptate distinctio dolorem recusandae
            libero earum incidunt alias itaque unde natus laudantium
            vitae nisi ducimus totam quisquam magnam enim, rem
            doloribus aspernatur ipsum odio asperiores deleniti?
            Officia accusantium quae fuga?
          </Typography>
        </Box>
      ))}

      <img
        src="https://picsum.photos/400"
        alt="rand"
        width="100%"
        loading="lazy"
        height="400px"
      />

      {[...Array(3)].map(e => (
        <Box mb={3}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quibusdam aliquid recusandae distinctio, numquam
            aspernatur repellat totam consequatur veniam enim optio ab
            commodi dicta facere! Perferendis odit soluta
            exercitationem fuga suscipit! Accusamus, reprehenderit
            aperiam temporibus labore, voluptates alias rem porro
            fugiat, qui cumque voluptas mollitia quasi explicabo
            eveniet dignissimos tenetur laudantium! Sapiente ex
            suscipit consequatur sunt, quaerat placeat veritatis
            assumenda dolores. Voluptate distinctio dolorem recusandae
            libero earum incidunt alias itaque unde natus laudantium
            vitae nisi ducimus totam quisquam magnam enim, rem
            doloribus aspernatur ipsum odio asperiores deleniti?
            Officia accusantium quae fuga?
          </Typography>
        </Box>
      ))}

      <img
        src="https://picsum.photos/400"
        alt="rand"
        width="100%"
        loading="lazy"
        height="400px"
      />

      {[...Array(3)].map(e => (
        <Box mb={3}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quibusdam aliquid recusandae distinctio, numquam
            aspernatur repellat totam consequatur veniam enim optio ab
            commodi dicta facere! Perferendis odit soluta
            exercitationem fuga suscipit! Accusamus, reprehenderit
            aperiam temporibus labore, voluptates alias rem porro
            fugiat, qui cumque voluptas mollitia quasi explicabo
            eveniet dignissimos tenetur laudantium! Sapiente ex
            suscipit consequatur sunt, quaerat placeat veritatis
            assumenda dolores. Voluptate distinctio dolorem recusandae
            libero earum incidunt alias itaque unde natus laudantium
            vitae nisi ducimus totam quisquam magnam enim, rem
            doloribus aspernatur ipsum odio asperiores deleniti?
            Officia accusantium quae fuga?
          </Typography>
        </Box>
      ))}

      <img
        src="https://picsum.photos/400"
        alt="rand"
        width="100%"
        loading="lazy"
        height="400px"
      />

      {[...Array(3)].map(e => (
        <Box mb={3}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quibusdam aliquid recusandae distinctio, numquam
            aspernatur repellat totam consequatur veniam enim optio ab
            commodi dicta facere! Perferendis odit soluta
            exercitationem fuga suscipit! Accusamus, reprehenderit
            aperiam temporibus labore, voluptates alias rem porro
            fugiat, qui cumque voluptas mollitia quasi explicabo
            eveniet dignissimos tenetur laudantium! Sapiente ex
            suscipit consequatur sunt, quaerat placeat veritatis
            assumenda dolores. Voluptate distinctio dolorem recusandae
            libero earum incidunt alias itaque unde natus laudantium
            vitae nisi ducimus totam quisquam magnam enim, rem
            doloribus aspernatur ipsum odio asperiores deleniti?
            Officia accusantium quae fuga?
          </Typography>
        </Box>
      ))}

      <img
        src="https://picsum.photos/400"
        alt="rand"
        width="100%"
        loading="lazy"
        height="400px"
      />
    </Container>
  );
};

export default Post;
