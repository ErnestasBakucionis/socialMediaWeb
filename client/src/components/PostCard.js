import React, { useContext } from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import InfoPopup from "../util/InfoPopup";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  const { user } = useContext(AuthContext);

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
        <InfoPopup content="Comment on post!">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="teal">
              <Icon name="comments" />
            </Button>
            <Label basic color="teal" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </InfoPopup>
        {/* Like button */}
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        {/* Delete button */}
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
