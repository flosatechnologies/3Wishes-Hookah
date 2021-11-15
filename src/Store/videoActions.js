export const AddVideos = (videoUrl) => {
  return (state, disapatch, { getFirestore }) => {
    getFirestore()
      .collection("videos")
      .doc("vedeoLink")
      .set({
        url: videoUrl,
      })
      .then(() => {
        alert("video added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getVideos = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("videos")
      .onSnapshot(
        (snapshot) => {
          let videos = [];

          snapshot.forEach((doc) => {
            videos.push(doc.data());
          });
          console.log(videos);
          dispatch({
            type: "GET_VIDEOS",
            payload: videos,
          });
        },
        (err) => {
          console.log(err.message());
        }
      );
  };
};
