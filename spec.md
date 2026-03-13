# Paysans-Artisans App

## Current State
The app has a multi-tab mobile UI (Home, Boutique, Producteurs, Panier, Communauté) with a rustic-modern design in deep forest greens, earth browns, and warm cream. The Home tab currently shows a generic hero section, seasonal counter, producer spotlight card, order CTA, and product grid.

## Requested Changes (Diff)

### Add
- Personalized warm banner at the top of the Home screen: 'Bienvenue, [User Name]!' in large Caveat font on a warm gradient
- Notification badge/icon specifically for new messages from the 'Point de Ralliement' local group chat (distinct from the existing generic bell icon in TopNav)
- Horizontal carousel section labeled 'Le Producteur du Mois' featuring the generated farmer photo (/assets/generated/farmer-portrait.dim_400x400.jpg)
- 'Suggestions de Saison' seasonal products grid section with season-appropriate items
- Central prominent CTA button labeled 'Découvrir nos Produits' (replaces 'Commander chez vos voisins')

### Modify
- Home tab layout: restructure to show welcome banner → notification row → producer-of-month carousel → seasonal suggestions grid → discover CTA
- TopNav bell icon: add a 'Point de Ralliement' specific notification indicator with message count

### Remove
- The generic hero section ('Du champ à votre table') from the Home tab
- The SeasonalCounter widget (replaced by the Suggestions de Saison grid)
- The OrderCTA ('Commander chez vos voisins') — replaced by 'Découvrir nos Produits'

## Implementation Plan
1. Create a WelcomeBanner component with 'Bienvenue, Marie!' personalized greeting on a warm gradient with decorative leaf motifs
2. Create a PointDeRallliementNotif component — a tappable pill/row showing unread message count from the local group chat
3. Create a ProducerOfMonthCarousel component — horizontal scrollable cards, first card featuring the farmer photo with name and farm details
4. Create a SuggestionsDesSaison component — 2-column grid of seasonal product cards with emoji, name, producer, price and add button
5. Create a DiscoverCTA component — large centered button 'Découvrir nos Produits' with a compass/magnifying glass icon
6. Restructure the HomeTab render to use new components in order: WelcomeBanner → PointDeRalliementNotif → ProducerOfMonthCarousel → SuggestionsDesSaison → DiscoverCTA
