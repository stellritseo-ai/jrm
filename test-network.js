// test-network.js
import dns from 'dns/promises';

async function run() {
  console.log("Starting network/DNS resolution tests...");
  try {
    const ip = await dns.lookup('google.com');
    console.log('google.com resolved successfully:', ip);
  } catch (e) {
    console.error('dns.lookup(google.com) failed:', e);
  }

  try {
    const ip = await dns.lookup('api.resend.com');
    console.log('api.resend.com resolved successfully:', ip);
  } catch (e) {
    console.error('dns.lookup(api.resend.com) failed:', e);
  }
}

run();
