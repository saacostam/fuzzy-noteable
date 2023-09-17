import {GOODBYE_MY_LOVER_GUITAR_TAB, LOVE_STORY_GUITAR_TAB} from '@noteable/realistic-mock-data';
import { Injectable } from '@nestjs/common';
import {PrismaService} from "@noteable/be-common";

async function addArtists(prisma){
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

async function addUsers(prisma){
  const admin_user = await prisma.user.upsert({
    where: {
      id: '6506a5d7faa9ffef6466cc73',
      username: 'admin',
    },
    update: {},
    create: {
      id: '6506a5d7faa9ffef6466cc73',
      username: 'admin',
      role: 'admin',
    },
    select: {
      id: true,
    }
  })

  return {
    admin_user
  }
}

async function main(prisma){
  const { jamesBlunt, taylorSwift } = await addArtists(prisma);
  const { admin_user } = await addUsers(prisma);

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
      ...GOODBYE_MY_LOVER_GUITAR_TAB,
      id: '6506945126f8409df582c6d8',
      song: undefined,
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
      ...LOVE_STORY_GUITAR_TAB,
      id: '650696cafcd5f4e223131440',
      song: undefined,
      songID: loveStory.id,
      userID: admin_user.id,
    }
  });
}

@Injectable()
export class SeedService {
  constructor(private readonly prismaService: PrismaService) {}

  async seed(){
    await main(this.prismaService)
  }
}
