# Mood Catcher App

A basic app that lets you login, save your moods and view a history of your entries.

## Getting Started

1. Clone this repo

```bash
git clone https://github.com/abbasfreestyle/MoodCatcher.git
```

2. Install the dependencies

```bash
npm install
```

3. Run the app

   - iOS - Open XCode, then ios/MoodCatcher.xcodeproj and press play
   - Android - `npm run android`

## Troubleshooting

Incase if the packager is not connecting with the device, you may need to start the packager manually. I only seem to be facing this with RN 0.59.

You could do either of the following.

```bash
npm start
```

or to clear the packager cache and start it

```bash
npm run packager:clear-cache
```

and the run a device build.

## MSCW

### Must Have

- Select mood (done)
- Select a list of feelings (done)
- Add optional note (done)
- Save a mood on server (done)
- Error handling (done)
- Retrieve a list of entries (done)
- View a total count of entries (done, see Readme in screens/Dashboard/Readme.md)
- View average percentage of moods recorded (done)
- View a circular chart of average mood (done)

### Should Have

- Staging and prod environments (project is too small)
- Git branching management (project is too small)
- Snapshot testing (done)
- Unit testing (done)
- Theming (done)
- Authentication via AWS cognito (done)
- Filter dashboard list via time (did not start)
- GraphQL via AWS (mostly done)

### Could Have

- Animation when selecting a mood (done)
- Custom authentication pages that matched the app theme (did not start)
- Delete Mood (did not start)
- Edit Mood (did not start)

### Would Have

- Pretty chart to display weekly activity (did not start)

Enjoy.