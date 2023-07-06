import create from "zustand";

interface FollowButtonStore {
  followedUsers: number[];
  toggleFollow: (userId: number) => void;
}

export const useFollowStore = create<FollowButtonStore>((set) => ({
  followedUsers: JSON.parse(localStorage.getItem("followedUsers") || "[]"),
  toggleFollow: (userId) =>
    set((state) => {
      const followedUsers = state.followedUsers.includes(userId)
        ? state.followedUsers.filter((id) => id !== userId)
        : [...state.followedUsers, userId];

      localStorage.setItem("followedUsers", JSON.stringify(followedUsers));
      return { followedUsers };
    }),
}));
