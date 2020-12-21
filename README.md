# Buff UP LTD JS/TypeScript Dev. Test

# The Task:

Create a JS/TypeScript library using our Rest API and show content of top of an HTML 5 Video Player.

## Part A: HTML Player

Create a simple HTML page,
used this url for video stream (**use this URL**: https://buffup-public.s3.eu-west-2.amazonaws.com/video/toronto+nba+cut+3.mp4) in any HTML5 video player.

Import the npm package for the library that you have created in Part B, to display content on top of that player

## Part B: Web Library

create a video player.
import our library and initialize it with the ID of the player
locate the HTML player frame, and render on top of that HTML content

### Library Requirements
http://code.jquery.com/jquery-1.11.0.min.js used jquery liabrary.

#### Base URL

The base URL is `http://demo2373134.mockable.io/`

#### Get  Buff

Gets the data for the Buff to show

Sample response:

```
data = [
    {
        "id": 1895,
        "name": "DreamHack Games",
        "question": "Who would you rather have as your Warzone partner?",
        "duration": 15,
        "image": [
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/1x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/2x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/3x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/original.png"
        ],
        "answers": "Nick & vikk would be my warzone partner"  
    },
    {
        "id": 5325,
        "name": "Nick",
        "question": "why Marcelo bielsa is still using a translator?",
        "duration": 12,
        "image": [
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/1x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/2x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/3x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/original.png"
        ],
        "answers":"Because he's an evil genius"
    },
    {
        "id": 5324,
        "name": "Vikk",
        "question": "how high is the basketball hoop from the ground?",
        "duration": 10,
        "image": [
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/1x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/2x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/3x.png",
            "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/original.png"
        ],
        "answers":"10 feet from the ground"
    },
    
]
```

Using the above URL's to fetch the various Buffs, request the Buffs display them over the video stream.
