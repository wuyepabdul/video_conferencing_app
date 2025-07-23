import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  getOutGoingFriendRequest,
  getRecommendedUsers,
  getUserFriends,
  sendFriendRequest,
} from "../lib/api";

const HomePage = () => {
  const queryClient = useQueryClient();
  const [outGoingRequestsIds, setOutGoingRequestsIds] = useState(new Set());

  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const { data: recommendedUsers = [], isLoading: loadingRecommendedUsers } =
    useQuery({
      queryKey: ["recommendedUsers"],
      queryFn: getRecommendedUsers,
    });

  const { data: outGoingFriendRequest } = useQuery({
    queryKey: ["outGoingFriendRequest"],
    queryFn: getOutGoingFriendRequest,
  });

  const { mutate: sendRequestMutation, isPending } = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["outGoingFriendRequest"] }),
  });

  useEffect(() => {
    const outGoingIds = new Set();
    if (outGoingFriendRequest && outGoingFriendRequest.length > 0) {
      outGoingFriendRequest.forEach((req) => {
        outGoingIds.add(req.id);
      });
      setOutGoingRequestsIds(outGoingIds);
    }
  }, [outGoingFriendRequest]);

  return <div>HomePage</div>;
};

export default HomePage;
