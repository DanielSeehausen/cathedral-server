module.exports = {
  player1: {
    msgAndResp: [
      {
        action: "move",
        blockCoords: [[0, 0], [0, 1], [0, 2]],
        pieceName: "road"
      }
    ],
    expectedResponses: [
      {
        poop: "this is the expected response..."
      },
    ]
  }
  // player2: {
  //   msgAndResp: [
  //     {
  //       action: "move",
  //       blockCoords: [[0, 0], [0, 1], [0, 2]],
  //       pieceName: "road"
  //     },
  //     {
  //       action: "move",
  //       blockCoords: [[0, 0], [0, 1], [0, 2]],
  //       pieceName: "road"
  //     },
  //     {},
  //   ],
  //   expectedResponses: [
  //     {},
  //     {},
  //     {},
  //   ]
  // },
}
