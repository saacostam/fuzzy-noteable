interface HandleRequestOptions{
    errorMessage: string;
}

export const handleRequestData = async (
    data: Response, 
    { 
        errorMessage,
    }: HandleRequestOptions
) => {
  if (!data || !data.ok) {
    let payload;

    try {
      payload = await data.json();
    } catch (error) {
      throw new Error(errorMessage);
    }

    throw new Error(payload.message);
  }

  return await data.json();
}
