import React from 'react'
import styles from '../../styles/Blog1.module.css'
import Link from 'next/link'

const blog1 = () => {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
        <h1>DP-1</h1>
        
        <h2>Program for Fibonacchi numbers using dynamic programming.</h2>
        <p>The Fibonacci numbers are the numbers in the following integer sequence.<br/>
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..</p>
        <p>The Sequence Fn of Fibonacci numbers is defined by the recurrence relation:-</p>
        <div className={styles.box1}> Fn = Fn-1 + Fn-2 </div>
        <p>with seed values</p>
        <div className={styles.box1}> F0 = 0 and F1 = 1.</div>

        <h3>Example:-</h3>
        <div className={styles.box2}>
             Input  : n = 2 <br/>
             Output : 1
             <br/>
             <br/>
             Input  : n = 8
             <br/>
             Output : 21
        </div>

        <div className={styles.box}>
        <h4>Problem Link:-</h4>
        <Link href='https://practice.geeksforgeeks.org/problems/nth-fibonacci-number1335/1' >
             <a className={styles.link} target='_blank'>  https://nth-fibonacci-number1335/1</a>
        </Link>
        </div>

        <p><b>Problem Statement:-</b> Given a positive integer n, find the nth fibonacci number. Since the answer can be very large, return the answer modulo 1000000007.</p>
        <p>we can solve this problem by both approaches, Memoization and tabulation.</p>
        <p style={{fontSize: 22}}>Memoization code:-</p>
      
        <div className={styles.codebox}>
        <p>class Solution {'{'}<br />public:<br /><br />long long int nthFibonacci(long long int n){'{'}<br />int m=1000000007;<br />long long int a=0;<br />long long int b=1;<br />long long int c,i;<br />if(n==0){'{'}<br />return a;<br />{'}'}<br /><br />for(i=2;i&lt;=n;i++){'{'}<br />c=a%m+b%m;<br />a=b;<br />b=c;<br />{'}'}<br /><br />return b%m;<br />{'}'}<br /><br />{'}'};</p>
        </div>


        </div>
    </div>
  )
}

export default blog1