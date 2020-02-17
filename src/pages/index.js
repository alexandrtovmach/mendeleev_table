import React from "react"
import { graphql } from "gatsby"

import { MendeleevTable } from "../components"

export const query = graphql`
  query {
    allPeriodicalTableJson {
      edges {
        node {
          id
          acidBaseProperties
          allOxidationStates
          amountInAir
          amountInSeawater
          atomicRadius
          amountInWorld
          boilC
          color
          boilK
          density
          discoveredAt
          electronicConfiguration
          discoveredBy
          electronegativity
          engName
          firstIonizationPotential
          group
          hexColor
          latName
          meltC
          meltK
          periodicalNumber
          outerElectronicConfiguration
          period
          radioactivity
          relativeAtomicWeight
          rusName
          sort
          stableOxidationState
          symbol
          type
          videoLink
        }
      }
    }
  }
`

export default ({ data: { allPeriodicalTableJson: { edges } } }) => {
  return <MendeleevTable elements={edges} />
}
