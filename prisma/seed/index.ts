import {PrismaClient} from "@prisma/client";
import {GOODBYE_MY_LOVER_GUITAR_TAB, LOVE_STORY_GUITAR_TAB} from "../../libs/realistic-mock-data/src";

const prisma = new PrismaClient();

async function addArtists(){
  const jamesBlunt = await prisma.artist.upsert({
    where: {
      id: '650690ddd6eecbe2075f8bcc',
      name: 'James Blunt',
    },
    update: {},
    create: {
      id: '650690ddd6eecbe2075f8bcc',
      name: 'James Blunt',
    },
    select: {
      id: true,
    }
  });

  const taylorSwift = await prisma.artist.upsert({
    where: {
      id: '650690f53680a73069aa60c3',
      name: 'Taylor Swift',
    },
    update: {},
    create: {
      id: '650690f53680a73069aa60c3',
      name: 'Taylor Swift',
    },
    select: {
      id: true,
    }
  });

  return {
    jamesBlunt,
    taylorSwift
  }
}

async function addUsers(){
  const admin_user = await prisma.user.upsert({
    where: {
      username: 'admin',
    },
    update: {},
    create: {
      username: 'admin',
      role: 'admin',
      id: ''
    },
    select: {
      id: true,
    }
  })

  return {
    admin_user
  }
}

async function main(){
  const { jamesBlunt, taylorSwift } = await addArtists();
  const { admin_user } = await addUsers();

  // Add Songs
  const goodByMyLover = await prisma.song.upsert({
    where: {
      id: '6506910d800c117473ed7f01',
      name: 'Goodbye My Lover',
    },
    update: {},
    create: {
      id: '6506910d800c117473ed7f01',
      name: 'Goodbye My Lover',
      key: 'E major',
      bpm: [90],
      decade: 2000,
      genre: 'Pop',
      artistsIDs: [
        jamesBlunt.id,
      ],
    }
  });

  await prisma.tablature.upsert({
    where: {
      id: '6506945126f8409df582c6d8',
    },
    update: {},
    create: {
      id: '6506945126f8409df582c6d8',
      ...GOODBYE_MY_LOVER_GUITAR_TAB,
      songID: goodByMyLover.id,
      userID: admin_user.id,
    }
  });

  const loveStory = await prisma.song.upsert({
    where: {
      id: '65069651abd35d773ec15ace',
      name: 'Love Story',
    },
    update: {},
    create: {
      id: '65069651abd35d773ec15ace',
      name: 'Love Story',
      key: 'D major',
      bpm: [119],
      decade: 2000,
      genre: 'Pop',
      artistsIDs: [
        taylorSwift.id,
      ],
    }
  });

  await prisma.tablature.upsert({
    where: {
      id: '650696cafcd5f4e223131440',
    },
    update: {},
    create: {
      id: '650696cafcd5f4e223131440',
      ...LOVE_STORY_GUITAR_TAB,
      songID: loveStory.id,
      userID: admin_user.id,
    }
  });
}
