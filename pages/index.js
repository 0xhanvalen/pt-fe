import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav/Nav";
import ContractBalance from "../components/ContractComponents/ContractBalance";
import GameStartTime from "../components/ContractComponents/GameStartTime";
import { useState } from "react";

export default function Home() {
  const [isJoinRoundOpen, setIsJoinRoundOpen] = useState(false);
  const [isPushRoundOpen, setIsPushRoundOpen] = useState(false);
  const [isPayoutPhaseOpen, setIsPayoutPhaseOpen] = useState(false);
  const [isMetagameOpen, setIsMetagameOpen] = useState(false);
  const [isFunOpen, setIsFunOpen] = useState(false);

  return (
    <>
      <Nav />
      <div className={styles.mainWrapper}>
        <div className={styles.main}>
          <div className={styles.shadowBox}>
            <h2>What is Push Together?</h2>
            <p>
              Push Together is a small-brain on-chain game (bars) developed and
              deployed by 0xhanvalen.
            </p>
            <p>
              More specifically, it's a new type of lottery game: an adversarial
              lottery.
            </p>
          </div>
          <div className={styles.shadowBox}>
            <h2>Game Rules</h2>
            <p>
              Games work in rounds. The first round is a special join round,
              followed by up to 3 "pushed" rounds. After the 3 push rounds have
              ended, a winner is determined, and they are sent nearly all of the
              ETH deposited to the contract from all players from all rounds.
            </p>
            <p>
              Again, reiterating, this is an{" "}
              <strong>adversarial lottery</strong>. We&apos;ll get to the
              adversarial portion in a moment.
            </p>
            <h4
              className={styles.hoverHeading}
              onClick={() => setIsJoinRoundOpen((v) => !v)}
            >
              Join Round
            </h4>
            {isJoinRoundOpen && (
              <>
                <p>
                  Join Rounds are the initial round of play. Anyone may join the
                  lottery by purchasing a ticket for 0.01ETH. Currently, the
                  join round lasts for exactly 1 hour after the first player
                  joins, thereby creating the game.
                </p>
                <p>
                  You would choose to join a game because you get an equal
                  chance to earn all of the money deposited by all other
                  players. It's a perfectly fair gamble, and the pot grows
                  directly commensurate with the number of players.
                </p>
              </>
            )}
            <h4
              className={styles.hoverHeading}
              onClick={() => setIsPushRoundOpen((v) => !v)}
            >
              Push Rounds
            </h4>
            {isPushRoundOpen && (
              <>
                <p>
                  After the initial Join Round, the game transitions to it's
                  adversarial form.
                </p>
                <p>
                  A push round begins when a user who has joined the game
                  decides to <strong>push</strong> the game into the next round.
                  They do so by depositing another 0.01ETH and calling{" "}
                  <strong>push().</strong>
                </p>
                <p>
                  This progresses the round number. When the game moves to the
                  payout phase, which is either one hour after the game enters
                  the final round or one hour after the last time anyone joined
                  or pushed, only addresses that pushed in the most recent round
                  are eligible to win.
                </p>
              </>
            )}
            <h4
              className={styles.hoverHeading}
              onClick={() => setIsPayoutPhaseOpen((v) => !v)}
            >
              Payout Phase
            </h4>
            {isPayoutPhaseOpen && (
              <>
                <p>
                  As mentioned in the previous paragraph, the game moves to the
                  payout phase either one hour after the game enters the final
                  round, or 1 hour elapses since the last push.
                </p>
                <p>
                  The game will randomly select a winner from all eligible
                  addresses, which are all of the addresses that participated in
                  either the final or most recent round. The winner then
                  receives 99% of the ETH deposited in the contract.
                  <br />
                  1% goes to hanvalen for paying chainlink VRF fees, as well as
                  funding further development and other more interesting,
                  complex games.
                </p>
              </>
            )}
            <h4
              className={styles.hoverHeading}
              onClick={() => setIsMetagameOpen((v) => !v)}
            >
              Metagame Notes
            </h4>
            {isMetagameOpen && (
              <>
                <p>This scenario is modelled after the prisoner's dilemma.</p>
                <p>
                  Obviously, the most ideal way to play is to Join, then Push
                  once and be the only person to Push, guaranteeing a win for
                  you exclusively.
                </p>
                <p>
                  It&apos;s unlikely you&apos;ll be the only person to push.
                </p>
                <p>
                  This leads to a system where you may be better off not pushing
                  - there&apos;s little benefit for each individual player if
                  everybody pushed all four rounds, this essentially simply
                  balloons the cost to play from 0.01ETH to 0.04ETH.
                </p>
              </>
            )}
            <h4
              className={styles.hoverHeading}
              onClick={() => setIsFunOpen((v) => !v)}
            >
              The Fun
            </h4>
            {isFunOpen && (
              <>
                <p>
                  The point of this game is to help you explore your feelings.{" "}
                  <br />
                  How badly do you want to betray strangers? <br />
                  How will you react to being able to betray strangers? <br />
                  How will you handle being betrayed by a friend or
                  acquaintance? <br />
                  When you&apos;re in a game that&apos;s approaching the payout
                  phase early, it may be extremely tempting to try to push
                  everyone out and take the pot for yourself. <br />
                  How will you weild that power?
                </p>
                <p>
                  Additionally, this is simply an opportunity to have a moonshot
                  savings plan.
                </p>
                <p>
                  Having or not having 0.04ETH feels about the same, but you
                  might win it all and walk away with 4, 40, or 400ETH depending
                  on how many people are playing... and those feel remarkably
                  different.
                </p>
              </>
            )}
          </div>
        </div>
        <div className={styles.main}>
          <ContractBalance />
          <GameStartTime />
        </div>
      </div>
    </>
  );
}
