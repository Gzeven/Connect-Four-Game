'use client';
import Link from 'next/link';
import { RulesContainer, RulesBox, Title, SectionTitle, Rule, RuleNumber, RuleText, CheckButton } from './styles';


export default function GameRulesPage() {
  return (
    <RulesContainer>
      <RulesBox>
        <Title>Rules</Title>
        <SectionTitle>Objective</SectionTitle>
        <RuleText>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </RuleText>

        <SectionTitle>How to Play</SectionTitle>
        <Rule>
          <RuleNumber>1</RuleNumber>
          <RuleText>Red goes first in the first game.</RuleText>
        </Rule>
        <Rule>
          <RuleNumber>2</RuleNumber>
          <RuleText>
            Players must alternate turns, and only one disc can be dropped in each turn.
          </RuleText>
        </Rule>
        <Rule>
          <RuleNumber>3</RuleNumber>
          <RuleText>The game ends when there is a 4-in-a-row or a stalemate.</RuleText>
        </Rule>
        <Rule>
          <RuleNumber>4</RuleNumber>
          <RuleText>The starter of the previous game goes second on the next game.</RuleText>
        </Rule>

        {/* Add the button at the bottom of the box */}
        <Link href="/">
        <CheckButton $bgColor="red" $hoverColor="darkPurple" $textColor="white">
      <svg
        width="70px"
        height="75px"
        viewBox="0 0 70 75"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="icon-check" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <circle fill="#000000" cx="35" cy="35" r="35"></circle>
          <circle fill="#000000" cx="35" cy="40" r="35"></circle>
          <circle fill="#FD6687" cx="35" cy="35" r="32"></circle>
          <polyline stroke="#FFFFFF" strokeWidth="3" points="20 34.5819497 30.2640104 44.84596 50.1099704 25"></polyline>
        </g>
      </svg>
    </CheckButton>
        </Link>
      </RulesBox>
    </RulesContainer>
  );
}
