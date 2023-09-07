export async function myFetch(url: string) {
  try {
    return await $fetch('http://url.that.will.respond.with.error.com');
  } catch (e) {
    // differentiate error and in case it is a 401/403:
    console.log('redirecting...');
    await navigateTo('/login?ret=%2F');
    throw new Error('unauthenticated');
  }
}
