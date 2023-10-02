export async function getTabById(id: string) {
  let data;
  try {
    data = await fetch(`http://localhost:3000/api/tab/${id}`);
  } catch (error) {
    throw new Error('Something went wrong')
  }

  if(!data) {
    throw new Error('No tab found with the given id!');
  }

  if(!data.ok){
    throw new Error('The query was unsuccessful!');
  }

  return await data.json();
}
