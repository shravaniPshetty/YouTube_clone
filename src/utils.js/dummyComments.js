export const dummyComments = [
   
        {
          name: "John Doe",
          text: "This is a sample comment text.",
          replies: [],
        },
        {
          name: "Jane Smith",
          text: "This is another sample comment text.",
          replies: [
            {
              name: "Alice Johnson",
              text: "This is a reply to Jane's comment.",
              replies: [],
            },
            {
              name: "Bob Brown",
              text: "This is another reply to Jane's comment.",
              replies: [
                {
                  name: "Charlie Davis",
                  text: "This is a nested reply to Bob's comment.",
                  replies: [
                    {
                      name: "Diana Evans",
                      text: "This is a deeper nested reply.",
                      replies: [],
                    },
                  ],
                },
                {
                  name: "Emily White",
                  text: "Yet another reply to Jane's comment.",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Michael Scott",
          text: "Here is a different comment.",
          replies: [
            {
              name: "Pam Beesly",
              text: "Replying to Michael's comment.",
              replies: [],
            },
            {
              name: "Jim Halpert",
              text: "Another reply to Michael's comment.",
              replies: [
                {
                  name: "Dwight Schrute",
                  text: "Nested reply to Jim's comment.",
                  replies: [],
                },
                {
                  name: "Angela Martin",
                  text: "Another nested reply to Jim's comment.",
                  replies: [],
                },
              ],
            },
            {
              name: "Kevin Malone",
              text: "Yet another reply to Michael's comment.",
              replies: [],
            },
          ],
        },
        {
          name: "Emily Johnson",
          text: "This is a new comment.",
          replies: [],
        },
      ];
      