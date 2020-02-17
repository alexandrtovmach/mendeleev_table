import React from "react"
import { graphql } from "gatsby"

import { MendeleevTable } from "../components"

export const query = graphql`
  query {
    allPeriodicalTableJson {
      group(field: hexColor, limit: 1) {
        nodes {
          hexColor
          color
          sort
        }
      }
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

export default ({
  data: {
    allPeriodicalTableJson: { edges, group },
  },
}) => {
  return <MendeleevTable elements={edges} sortColors={group} />
}
