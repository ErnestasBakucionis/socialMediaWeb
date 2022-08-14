import React from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  function likePost() {
    console.log("likePost");
  }

  function commentOnPost() {
    console.log("commentOnPost");
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      {/* Comment button */}
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="teal">
            <Icon name="comments" />
          </Button>
          <Label basic color="teal" pointing="left">
            {commentCount}
          </Label>
        </Button>
      {/* Like button */}
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="olive" basic>
            <Icon name="thumbs up" />
          </Button>
          <Label basic color="olive" pointing="left">
            {likeCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
