import React from "react";
import { useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import { FETCH_POSTS_QUERY } from "../util/graphql";

function Home() {

  const { loading, data: { getPosts: posts } = {} } =
    useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h1>Recent Posts:</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          <Transition.Group duration={300}>
            {posts &&
              posts.map((post) => (
                <Grid.Column mobile={16} tablet={8} computer={4} key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
