import {
  createCheckoutSession,
  getStripePayments,
} from '@stripe/firestore-stripe-payments'
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'

const payments = getStripePayments(app, {
    customersCollection: 'customers',
    productsCollection: 'products',
})

const loadCheckout = async (priceId: string) => {
    await createCheckoutSession(payments, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
    })
    .then((snapshot: { url: string | URL }) => window.location.assign(snapshot.url))
    .catch((error: { message: any }) => console.log(error.message))
}

export { loadCheckout }
export default payments