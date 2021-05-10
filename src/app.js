import React from 'react';
import Logo from './amazon.png';
import './app.css';
import Plus from './plus.png';

const Main = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Slider />
            <MainCont />
        </React.Fragment>
    );
}


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navLeft">
                <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDczIiBoZWlnaHQ9IjE0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMTQuODMgOTIuMzY2Yy4xNTgtMS4wMjMuOTY3LTEuODAyIDIuMDkxLTEuODAyLjUyNCAwIDEuMTE4LjE3MSAxLjc0NC41NjIgMzQuNzMxIDIxLjc4MSA3Ny42OTcgMzQuOTAzIDEyMi4wNjcgMzQuOTAzIDI5Ljk0MyAwIDYyLjg0MS02LjcwMSA5My4xMTctMjAuNTQ0IDQuNTYzLTIuMDc5IDguMzg2IDMuMjM5IDMuOTIyIDYuODExLTI3LjAwOCAyMS40NzItNjYuMTYzIDMyLjg5Ny05OS44NzkgMzIuODk3LTQ3LjI0OCAwLTg5Ljc5NS0xOC44My0xMjIuMDA0LTUwLjE2OC0uNjMyLS42MTQtLjk2NC0xLjI4Ny0xLjA1OC0xLjkxOXYtLjc0eiIvPjxwYXRoIGQ9Ik0zMTUuNDkzIDk1Ljc1MWM3Ljk4Ni02LjAzIDE4LjYwNC04LjA0MiAyNy40MDgtOC4wNDIgOC4yMzUgMCAxNC44ODYgMS43NjMgMTYuMzAyIDMuNjQ4IDIuOTc2IDMuOTMzLS43NjYgMzEuMjAxLTE1LjI2MSA0NC4yMDYtMi4yMTggMi4wMTQtNC4zMjguOTI5LTMuMzUtMS42OTkgMy4yNTktOC43MjIgMTAuNTUzLTI4LjMwNiA3LjA5Ni0zMy4wNTQtMy40NTItNC43NTktMjIuODM1LTIuMjY4LTMxLjUyNy0xLjE0NS0xLjM0Ny4xNzEtMi4xMTMtLjM4LTIuMjI1LTEuMjAxdi0uNDQzYy4wOTEtLjcxMi41OTYtMS41NDMgMS41NTctMi4yN3pNNDUwLjM1OSAxOS44NjNjNy4xIDAgMTIuNjQ4IDIuMTUyIDE2LjY0NSA2LjQ1NkM0NzEuMDAxIDMwLjYyMiA0NzMgMzYuNTk2IDQ3MyA0NC4yNDFjMCA3LjcwNC0xLjk5OSAxMy43MDgtNS45OTYgMTguMDEyLTMuOTk3IDQuMzA0LTkuNTQ1IDYuNDU2LTE2LjY0NSA2LjQ1Ni03LjA5OSAwLTEyLjY0OC0yLjE1Mi0xNi42NDUtNi40NTZzLTUuOTk2LTEwLjMwOC01Ljk5Ni0xOC4wMTJjMC03LjY0NSAxLjk5OS0xMy42MTkgNS45OTYtMTcuOTIyIDMuOTk3LTQuMzA0IDkuNTQ2LTYuNDU2IDE2LjY0NS02LjQ1NnptMCAxMC4xMTJjLTYuMjY0IDAtOS4zOTYgNC43NTUtOS4zOTYgMTQuMjY2IDAgOS41NyAzLjEzMiAxNC4zNTUgOS4zOTYgMTQuMzU1IDYuMjY0IDAgOS4zOTctNC43ODUgOS4zOTctMTQuMzU1IDAtOS41MTEtMy4xMzMtMTQuMjY2LTkuMzk3LTE0LjI2NnpNNDAzLjE5MSAyMC4yOWM1LjQzMiAwIDkuNjg0IDEuMzI4IDEyLjc0NyAzLjk4NCAzLjA2NCAyLjY1NyA0LjU5OSA2LjIwMSA0LjU5OSAxMC42MjYgMCA0LjQzMi0xLjY1MyA3Ljc4Mi00Ljk0NSAxMC4wNTEtMy4zIDIuMjc1LTguMTY0IDMuNDEtMTQuNTg2IDMuNDEtMy4zMjkgMC02LjIyMy0uMzIxLTguNjczLS45Ny4zNDcgMy45NTQgMS41MzUgNi43OSAzLjU1IDguNDk5IDIuMDE1IDEuNzA4IDUuMDY0IDIuNTY2IDkuMTUzIDIuNTY2IDEuNjMxIDAgMy4yMjYtLjEwNCA0Ljc3Ni0uMzEzIDEuNTQzLS4yMDIgMy42OTEtLjY2NCA2LjQzNy0xLjM2Ni4xNjktLjA1OS4zNDYtLjEwNC41MjQtLjEzNC4xNzctLjAzLjMxNy0uMDQ1LjQzNS0uMDQ1Ljk5NyAwIDEuNDkxLjY3OSAxLjQ5MSAyLjAzN3Y0LjA3NWMwIC45NC0uMTMzIDEuNjA0LS4zOTEgMS45OTItLjI2Ni4zOC0uNzc1LjcyNC0xLjUzNSAxLjAxNS00LjI2NyAxLjY0OS04Ljc5MiAyLjQ3Ny0xMy41ODIgMi40NzctNy4yNDEgMC0xMi44LTItMTYuNjgyLTYuMDIyLTMuODgzLTQuMDE0LTUuODI0LTkuNzY3LTUuODI0LTE3LjI2NiAwLTcuNjcxIDEuOTg1LTEzLjY5MiA1Ljk1Ni0xOC4wNTggMy45NzItNC4zNzIgOS40ODYtNi41NTggMTYuNTUtNi41NTh6bS0uOTYgOC45NDZjLTUuNjEgMC04Ljg1IDMuNDg1LTkuNzIxIDEwLjQ0NyAyLjMzMi40NzcgNC45MzEuNzA5IDcuNzk1LjcwOSAyLjk3NCAwIDUuMTM3LS40NTYgNi40OC0xLjM3MyAxLjM0NC0uOTExIDIuMDE2LTIuMzE0IDIuMDE2LTQuMjAxIDAtMy43MjQtMi4xOTMtNS41ODItNi41Ny01LjU4MnpNMzY5LjA2OS41NDJjLjgzNSAwIDEuNDE3LjE2NSAxLjc0NS40OTYuMzI4LjMzMS40OTIuOTE4LjQ5MiAxLjc2MXY2Mi4yOThjMCAuNzgzLS4xNjQgMS4zNTQtLjQ5MiAxLjcxNi0uMzI4LjM2MS0uOTEuNTQxLTEuNzQ1LjU0MWgtNy4xNTljLS43MTYgMC0xLjI2OC0uMTUtMS42NTYtLjQ1MS0uMzg3LS4zMDEtLjY3MS0uODEzLS44NS0xLjUzNWwtLjUzNy0yLjA3N2MtMy42OTkgMy4zNzEtOC4wODMgNS4wNTYtMTMuMTU1IDUuMDU2LTMuODc3IDAtNy4yNDgtMS4wMDgtMTAuMTEyLTMuMDI0LTIuODY0LTIuMDE3LTUuMDU2LTQuODE1LTYuNTc3LTguMzk3LTEuNTIyLTMuNTgxLTIuMjgyLTcuNzE5LTIuMjgyLTEyLjQxNCAwLTcuNDY0IDEuNzU5LTEzLjQzOCA1LjI3OS0xNy45MjIgMy41Mi00LjQ4NSA4LjE3NC02LjcyNyAxMy45NjEtNi43MjcgNC43MTMgMCA4LjggMS4zNTQgMTIuMjYgNC4wNjNWMi43OTljMC0uODQzLjE3OS0xLjQzLjUzNy0xLjc2MS4zNTgtLjMzMS45MjUtLjQ5NiAxLjctLjQ5Nmg4LjU5MXptLTE5LjY4OCAyOS4yNTNjLTMuMTYyIDAtNS41MTggMS4xODktNy4wNjkgMy41NjYtMS41NTEgMi4zNzgtMi4zMjcgNS45NzQtMi4zMjcgMTAuNzg5IDAgNC44MTYuODIgOC4zOTcgMi40NjEgMTAuNzQ1IDEuNjQxIDIuMzQ3IDQuMTYxIDMuNTIxIDcuNTYyIDMuNTIxIDIuODY0IDAgNS42MDgtLjg0MyA4LjIzMy0yLjUyOFYzMi4wNTJjLTIuNTY1LTEuNTA1LTUuNTE5LTIuMjU3LTguODYtMi4yNTd6TTMwNy4zMjMgNjcuMzU0Yy0uNzc2IDAtMS4zNDMtLjE4LTEuNzAxLS41NDEtLjM1OC0uMzYyLS41MzctLjkzMy0uNTM3LTEuNzE2VjIzLjQ3NWMwLS44NDMuMTc5LTEuNDMuNTM3LTEuNzYxLjM1OC0uMzMxLjkyNS0uNDk3IDEuNzAxLS40OTdoOC41OTFjLjgzNSAwIDEuNDE3LjE2NiAxLjc0NS40OTcuMzI4LjMzMS40OTIuOTE4LjQ5MiAxLjc2MXY0MS42MjJjMCAuNzgzLS4xNjQgMS4zNTQtLjQ5MiAxLjcxNi0uMzI4LjM2MS0uOTEuNTQxLTEuNzQ1LjU0MWgtOC41OTF6TTMxMS42MTggMTQuMDg1Yy0yLjI2NyAwLTQuMDg3LS42MzItNS40NTktMS44OTYtMS4zNzItMS4yNjQtMi4wNTgtMi45OC0yLjA1OC01LjE0NyAwLTIuMTY2LjY4Ni0zLjg4MiAyLjA1OC01LjE0NkMzMDcuNTMxLjYzMiAzMDkuMzUxIDAgMzExLjYxOCAwYzIuMjY3IDAgNC4wODcuNjMyIDUuNDU5IDEuODk2IDEuMzcyIDEuMjY0IDIuMDU4IDIuOTggMi4wNTggNS4xNDYgMCAyLjE2Ny0uNjg2IDMuODgzLTIuMDU4IDUuMTQ3LTEuMzcyIDEuMjY0LTMuMTkyIDEuODk2LTUuNDU5IDEuODk2ek0yNzEuODIyIDY3LjM1NGMtLjU5NyAwLTEuMDg5LS4wNzUtMS40NzctLjIyNWEyLjM0IDIuMzQgMCAwMS0uOTg0LS43MjNjLS4yNjktLjMzMS0uNTIyLS43OTctLjc2MS0xLjM5OWwtMTUuMzAzLTQwLjE3OGEzNi43MjQgMzYuNzI0IDAgMDEtLjQ0Ny0xLjI2NCAzLjE5NiAzLjE5NiAwIDAxLS4xNzktLjk5M2MwLS45MDMuNTk3LTEuMzU1IDEuNzktMS4zNTVoOC45NDljLjk1NCAwIDEuNjU1LjE4MSAyLjEwMy41NDIuNDQ3LjM2MS43OS45NjMgMS4wMjkgMS44MDZsOS4yMTcgMzEuOTYyIDkuMzk3LTMxLjk2MmMuMjM4LS44NDMuNTgxLTEuNDQ1IDEuMDI5LTEuODA2LjQ0Ny0uMzYxIDEuMTQ4LS41NDIgMi4xMDMtLjU0Mmg4LjY4YzEuMTk0IDAgMS43OS40NTIgMS43OSAxLjM1NSAwIC4zMDEtLjA1OS42MzItLjE3OS45OTMtLjExOS4zNjEtLjI2OC43ODItLjQ0NyAxLjI2NGwtMTUuMzAzIDQwLjE3OGMtLjIzOS42MDItLjQ5MiAxLjA2OC0uNzYxIDEuMzk5YTIuNDA2IDIuNDA2IDAgMDEtLjkzOS43MjNjLS4zNTguMTUtLjg2NS4yMjUtMS41MjIuMjI1aC03Ljc4NXpNMjE0LjcxNyAxOS44NjljNS41NzQgMCA5LjkzNiAxLjM1NSAxMy4wNzkgNC4wNjUgMy4xNDIgMi43MSA0LjcxOCA2LjMyNiA0LjcxOCAxMC44NCAwIDQuNTIxLTEuNjk3IDcuOTM5LTUuMDc0IDEwLjI1My0zLjM4NiAyLjMyMi04LjM3NiAzLjQ3OS0xNC45NjUgMy40NzktMy40MTUgMC02LjM4NC0uMzI4LTguODk4LS45OS4zNTYgNC4wMzUgMS41NzUgNi45MjcgMy42NDMgOC42NyAyLjA2NyAxLjc0NCA1LjE5NSAyLjYxOSA5LjM5IDIuNjE5IDEuNjc0IDAgMy4zMS0uMTA3IDQuOS0uMzIgMS41ODMtLjIwNSAzLjc4Ni0uNjc3IDYuNjA0LTEuMzkzYTMuMzMgMy4zMyAwIDAxLjUzNy0uMTM3Yy4xODItLjAzLjMyNi0uMDQ2LjQ0Ny0uMDQ2IDEuMDIyIDAgMS41My42OTMgMS41MyAyLjA3OXY0LjE1NmMwIC45NTktLjEzNyAxLjYzNi0uNDAyIDIuMDMyLS4yNzIuMzg4LS43OTUuNzM5LTEuNTc1IDEuMDM1LTQuMzc3IDEuNjgzLTkuMDE5IDIuNTI4LTEzLjkzNCAyLjUyOC03LjQyOSAwLTEzLjEzMi0yLjA0LTE3LjExNS02LjE0My0zLjk4NC00LjA5Ni01Ljk3NS05Ljk2NC01Ljk3NS0xNy42MTUgMC03LjgyNSAyLjAzNy0xMy45NjggNi4xMTEtMTguNDIxIDQuMDc0LTQuNDYxIDkuNzMyLTYuNjkxIDE2Ljk3OS02LjY5MXptLS45ODUgOS4xMjdjLTUuNzU1IDAtOS4wOCAzLjU1NS05Ljk3MyAxMC42NTcgMi4zOTMuNDg3IDUuMDU5LjcyMyA3Ljk5Ny43MjMgMy4wNTIgMCA1LjI3MS0uNDY0IDYuNjQ5LTEuNDAxIDEuMzc4LS45MjggMi4wNjctMi4zNTkgMi4wNjctNC4yODUgMC0zLjc5OS0yLjI0OS01LjY5NC02Ljc0LTUuNjk0ek0xMjYuMDIzIDI1LjY1NGMzLjE3My0yLjEwOSA2LjAzNi0zLjYwMSA4LjU4LTQuNDY5YTI0LjA2MyAyNC4wNjMgMCAwMTcuODY5LTEuMzE3YzUuMzkyIDAgOS4xOTMgMS45MzQgMTEuNDEyIDUuNzg2IDMuMDUyLTIuMDQ4IDUuOTMtMy41MjUgOC42MjYtNC40MjNhMjYuMDY0IDI2LjA2NCAwIDAxOC4zNTMtMS4zNjNjNC4xOTUgMCA3LjQ0NCAxLjE4IDkuNzU0IDMuNTI1IDIuMzAyIDIuMzUyIDMuNDYxIDUuNjMzIDMuNDYxIDkuODVWNjUuMTNjMCAuNzg0LS4xNjcgMS4zNTUtLjQ5MiAxLjcxMy0uMzM0LjM2NS0uOTE3LjU0LTEuNzU3LjU0aC04LjYyNmMtLjc4IDAtMS4zNDgtLjE3NS0xLjcwNC0uNTQtLjM2My0uMzU4LS41NDUtLjkyOS0uNTQ1LTEuNzEzVjM2LjEzNWMwLTQuMDk1LTEuODI1LTYuMTQzLTUuNDgzLTYuMTQzLTMuMjM0IDAtNi40OTguNzc3LTkuNzkyIDIuMzQ1VjY1LjEzYzAgLjc4NC0uMTY3IDEuMzU1LS40OTIgMS43MTMtLjMzMy4zNjUtLjkxNy41NC0xLjc1Ny41NGgtOC42MjZjLS43OCAwLTEuMzQ4LS4xNzUtMS43MDQtLjU0LS4zNjMtLjM1OC0uNTM3LS45MjktLjUzNy0xLjcxM1YzNi4xMzVjMC00LjA5NS0xLjgzMy02LjE0My01LjQ4My02LjE0My0zLjM1NSAwLTYuNjQ5LjgwNy05Ljg5MSAyLjQzNlY2NS4xM2MwIC43ODQtLjE2NiAxLjM1NS0uNDkyIDEuNzEzLS4zMzMuMzY1LS45MTYuNTQtMS43NDkuNTRoLTguNjM0Yy0uNzcyIDAtMS4zNDgtLjE3NS0xLjcwMy0uNTQtLjM1Ni0uMzU4LS41MzgtLjkyOS0uNTM4LTEuNzEzVjIzLjQ4NGMwLS44NDUuMTgyLTEuNDMxLjUzOC0xLjc1OC4zNTUtLjMzNS45MzEtLjQ5NSAxLjcwMy0uNDk1aDYuNDc1YzEuMzc5IDAgMi4yMTIuNjYyIDIuNTE1IDEuOTg3bC43MTkgMi40MzZ6TTg5LjgyNSAyMy40ODZjMC0uODQ1LjE4Mi0xLjQzMS41MzgtMS43NTkuMzY0LS4zMzUuOTMyLS41MDIgMS43MTItLjUwMmg4LjYyNWMuODQxIDAgMS40MjQuMTY3IDEuNzUuNTAyLjMzMy4zMjguNS45MTQuNSAxLjc1OXY0MS42MzhjMCAuNzg0LS4xNjcgMS4zNjItLjUgMS43Mi0uMzI2LjM1OC0uOTA5LjU0MS0xLjc1LjU0MWgtOC42MjVjLS43OCAwLTEuMzQ4LS4xODMtMS43MTItLjU0MS0uMzU2LS4zNTgtLjUzOC0uOTM2LS41MzgtMS43MlYyMy40ODZ6TTk2LjM4NCAxNC4wOTJjLTIuMjggMC00LjEwNS0uNjMyLTUuNDgzLTEuODk1LTEuMzc4LTEuMjcxLTIuMDYtMi45ODQtMi4wNi01LjE1NCAwLTIuMTY5LjY4Mi0zLjg4MiAyLjA2LTUuMTQ1QzkyLjI3OS42MzQgOTQuMTA0LjAwMiA5Ni4zODQuMDAyYzIuMjc5IDAgNC4xMDQuNjMyIDUuNDgzIDEuODk2IDEuMzc4IDEuMjYzIDIuMDY3IDIuOTc2IDIuMDY3IDUuMTQ1IDAgMi4xNy0uNjg5IDMuODgzLTIuMDY3IDUuMTU0LTEuMzc5IDEuMjYzLTMuMjA0IDEuODk1LTUuNDgzIDEuODk1ek02Ni4zMTYgMjguMDkyYzIuMzkzLTIuNjQ5IDQuNjU3LTQuNTI5IDYuNzg1LTUuNjQ4YTE0LjQ0MSAxNC40NDEgMCAwMTYuNzg2LTEuNjY3aDEuMjU3Yy44NCAwIDEuNDM5LjE2OCAxLjc5NS40OTUuMzYzLjMzNS41MzcuOTIxLjUzNyAxLjc1OHY3LjU5YzAgLjc4NC0uMTU5IDEuMzU1LS40OTIgMS43Mi0uMzI2LjM1OC0uOTA5LjU0LTEuNzQ5LjU0LS40MjQgMC0uOTYyLS4wMy0xLjYyMS0uMDkxYTI4LjI2NiAyOC4yNjYgMCAwMC0yLjUxNC0uMDkxYy0xLjM3OSAwLTMuMDUyLjE5OC01LjAzNi41ODYtMS45NzcuMzk2LTMuNjUxLjg5LTUuMDI5IDEuNDkydjMwLjM0OWMwIC43ODQtLjE2NiAxLjM1NS0uNDkyIDEuNzIxLS4zMzMuMzU3LS45MTYuNTQtMS43NTcuNTRINTYuMTZjLS43OCAwLTEuMzQ4LS4xODMtMS43MDQtLjU0LS4zNjMtLjM2Ni0uNTQ1LS45MzctLjU0NS0xLjcyMVYyMy40ODdjMC0uODQ1LjE4Mi0xLjQzMS41NDUtMS43NjYuMzU2LS4zMjcuOTI0LS40OTUgMS43MDQtLjQ5NWg2LjQ2OGMxLjM3OCAwIDIuMjE5LjY2MyAyLjUyMiAxLjk4N2wxLjE2NiA0Ljg3OXpNMjYuMjQ4IDE5Ljg3NWM1LjgwOCAwIDEwLjQwNSAyLjEzOSAxMy43OSA2LjQxIDMuMzg1IDQuMjc4IDUuMDgyIDEwLjA1NSA1LjA4MiAxNy4zNDggMCA0Ljk5My0uODQxIDkuMzYyLTIuNTE1IDEzLjA5Mi0xLjY4MSAzLjczOC0zLjk2IDYuNjE1LTYuODMxIDguNjI1LTIuODc3IDIuMDI1LTYuMTcyIDMuMDI5LTkuODkgMy4wMjktMi40NTQgMC00Ljc5NC0uMzg4LTcuMDA1LTEuMTcyLTIuMjE5LS43ODQtNC4xMDUtMS44NjUtNS42NjUtMy4yNXYxOS43NzZjMCAuODQ1LS4xNjYgMS40MzEtLjQ5MiAxLjc2Ni0uMzMzLjMyNy0uOTE2LjQ5NS0xLjc1Ny40OTVIMi4zNGMtLjc4IDAtMS4zNDgtLjE2OC0xLjcwNC0uNDk1LS4zNjQtLjMzNS0uNTQ2LS45MjEtLjU0Ni0xLjc2NnYtNjAuMjVjMC0uODM3LjE4Mi0xLjQyMy41NDYtMS43NTguMzU2LS4zMzUuOTI0LS40OTUgMS43MDQtLjQ5NWg2LjQ3NGMxLjM3OSAwIDIuMjEyLjY2MiAyLjUxNSAxLjk4N2wuNjI4IDIuMzQ0YzEuNzk1LTEuNzQzIDMuOTY5LTMuMTI4IDYuNTEzLTQuMTU2IDIuNTQ1LTEuMDIgNS4xNDItMS41MyA3Ljc3OC0xLjUzem0tNC4yMjYgOS45MzRjLTMuMTEzIDAtNi4wNTEuODE0LTguODA4IDIuNDM2djIzLjc1N2MyLjYzNiAxLjYyOSA1LjU3NCAyLjQ0NCA4LjgwOCAyLjQ0NCAzLjM1NSAwIDUuODI0LTEuMTQyIDcuNDE0LTMuNDMzIDEuNTktMi4yOTIgMi4zODUtNS45IDIuMzg1LTEwLjg0IDAtNS4wMDEtLjc4LTguNjQtMi4zNC0xMC45MzEtMS41Ni0yLjI5MS00LjA0NC0zLjQzMy03LjQ1OS0zLjQzM3oiLz48L2c+PC9zdmc+' alt="logoMain"></img>
            </div>
            <div className="navCent">
                <ul className="nav-list">
                    <li className="nav-list-item active">
                        Home
                        </li>
                    <li className="nav-list-item">
                        TV Shows
                        </li>
                    <li className="nav-list-item">
                        Movies
                        </li>
                    <li className="nav-list-item">
                        kids
                        </li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="searchLogo">
                    <g data-name="Layer 2">
                        <g data-name="search"><rect width="24" height="24" opacity="0" />
                            <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" /></g>
                    </g>
                </svg>
            </div>
            <div className="navright">
                <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png" alt="searchbtn">
                </img>
                    User
                </div>
        </nav>
    );
}


const sliderItems = [
    {
        id: 1,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Saina/df89c071-5613-4ff9-898e-fd7fee0bf226._UR3000,600_SX1500_FMjpg_.jpeg'
    },
    {
        id: 2,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ScoobRevisedCreatives/d351fd1f-d378-4c3b-8e83-b5ebb668e354._UR3000,600_SX1500_FMjpg_.jpeg'
    },
    {
        id: 3,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_LOLTrailerSuperhero/3ccdfa23-74b4-403e-9306-605cf4eb53ee._UR3000,600_SX1500_FMjpg_.jpeg'
    },
    {
        id: 4,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_YoungSheldonNewSeason4WatchNow/203ed7b6-6f53-4b1c-99ba-2f7e80f7199d._UR3000,600_SX1500_FMjpg_.jpg'
    },
    {
        id: 5,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_C2AKIngOfComedy/ef3f03b0-2b51-43ca-9658-0fc461703794._UR3000,600_SX1500_FMjpg_.jpg'
    },
    {
        id: 6,
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_SUSHIBiswa/a44c8042-1f31-4e80-997f-f38a24ee6271._UR3000,600_SX1500_FMjpg_.jpg'
    },
    {
        id: 7,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_GenericAwardsSHMar21/9c6b9227-7dca-4d17-9594-710c28965047._UR3000,600_SX1500_FMjpg_.jpg'
    },
    {
        id: 8,
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_kal_mein_udega/b221bf32-7859-4f9a-a6ca-1e43487f6c0c._UR3000,600_SX1500_FMjpg_.jpg'
    },
    {
        id: 9,
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_kal_mein_udega/b221bf32-7859-4f9a-a6ca-1e43487f6c0c._UR3000,600_SX1500_FMjpg_.jpg'
    },
    {
        id: 10,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheExpanseS5_NewSeason/cff1e49f-e709-4e82-9eb7-dc04565d2164._UR3000,600_SX1500_FMjpg_.jpg'
    },
    {
        id: 11,
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_InvincibleS1Reviews/8c5040c5-9e72-4ecd-a27b-f9b825f62e4b._UR3000,600_SX1500_FMjpg_.jpg'
    }
]

var count = 0;

const Slider = () => {
    const [image, setImage] = React.useState(sliderItems[0]['pic']);
    const imageCount = (count) => {
        let item = sliderItems[count]['pic'];
        setImage(item);
    }
    function clickleft() {
        if (count > 0) {
            count -= 1;
            imageCount(count);
            addIndics(count)
        }
    }
    function clickright() {
        if (count < sliderItems.length) {
            count += 1;
            imageCount(count);
            addIndics(count);
        }
    }
    const addIndics = (count) => {
        let ele = document.getElementById(count + 1);
        console.log(ele);
        ele.style.background = "white";
    }
    setTimeout(() => {
        addIndics(count);
    }, 1000);
    return (
        <header className="header">
            <div className="Slider">
                <button id="leftslide" onClick={clickleft}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMjM3IDE3LjIzN3YtMi40NzRsMTQgMTRjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGExLjc0OCAxLjc0OCAwIDAxLTIuNDc0IDBsLTE0LTE0YTEuNzQ4IDEuNzQ4IDAgMDEwLTIuNDc0bDE0LTE0YTEuNzQ4IDEuNzQ4IDAgMDEyLjQ3NCAwYy42ODQuNjgzLjY4NCAxLjc5IDAgMi40NzRsLTE0IDE0eiIgZmlsbD0iI0VGRjFGMSIvPjwvc3ZnPg==" alt=""></img>
                </button>
                <div className="imageCase">
                    <img src={image} alt="pic" id="image"></img>
                </div>
                <button id="rightslide" onClick={clickright}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0Ljc2MyAxNy4yMzd2LTIuNDc0bC0xNCAxNGExLjc0OCAxLjc0OCAwIDAwMCAyLjQ3NGMuNjgzLjY4NCAxLjc5LjY4NCAyLjQ3NCAwbDE0LTE0YTEuNzQ4IDEuNzQ4IDAgMDAwLTIuNDc0bC0xNC0xNEExLjc1IDEuNzUgMCAwMC43NjMgMy4yMzdsMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+" alt=""></img>
                </button>
                <div className="indicators">
                    <div className="indic-marks" id="1"></div>
                    <div className="indic-marks" id="2"></div>
                    <div className="indic-marks" id="3"></div>
                    <div className="indic-marks" id="4"></div>
                    <div className="indic-marks" id="5"></div>
                    <div className="indic-marks" id="6"></div>
                    <div className="indic-marks" id="7"></div>
                    <div className="indic-marks" id="8"></div>
                    <div className="indic-marks" id="9"></div>
                    <div className="indic-marks" id="10"></div>
                    <div className="indic-marks" id="11"></div>
                </div>
            </div>
        </header>
    );
}

const watchNext = [
    {
        title: 'The Office',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/33e5126cf1654f01894fdd4b06c3bcabca52884db23441e8dbe5f3a25bcfef2a._UR1920,1080_RI_SX356_FMjpg_.jpg',
        des: "It's Season 4 and there are lots of changes at the office Former temp Ryan is now everyone's boss and is pushing a new website initiative",
        year: "2008",
        info: 'Play S4 E1',
        rating: '13+'
    },
    {
        title: 'The Expanse - Season 2',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/amazon_studios-EXPA_S2_STM_IN-Full-Image_GalleryCover-rw-RW-1549399125727._UR1920,1080_RI_SX356_FMjpg_.jpg',
        des: 'As Season 2 unfolds, tensions between each division continue to grow - positioning the Rocinante crew in an ever more precarious situation. And the Protomolecule threatens the safety of the entire solar system, while the larger conspiracy that led to its unleashing begins to be exposed.',
        year: '2019',
        info: 'Play S2 E13',
        rating: '16+'
    },
    {
        title: 'Mr. Robot',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/028f4f4221a6d7095c8995a504598a762b14c3757ad13628062f40e1a9aeab83._UR1920,1080_RI_SX356_FMjpg_.jpg',
        des: 'Mr. Robot follows Elliot Alderson (Rami Malek), a young cyber-security engineer who becomes involved in the underground hacker group fsociety, after being recruited by their mysterious leader (Christian Slater).',
        year: '2016',
        info: 'Play S2 E4',
        rating: '18+'
    }
]

const Recommended = [
    {
        title: 'Tenet',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/046307db4e7684ae32c1990bb985c9ec616077ed4f2fc89617ec5a41acec90e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Armed with only one word—Tenet—and fighting for the survival of the entire world, the Protagonist journeys through a twilight world ',
        year: '2020',
        info: 'Play',
        rating: '13+',
        duration: '2h 30m'
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/14bd952933c71ef46ce0db76674e8b70e70759ffba7eb90d6486935f9719ed8b._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Voldemort is tightening his grip on Hogwarts™ and it is no longer the safe haven it once was. Harry and Dumbledore work to find the key to',
        year: '2009',
        info: 'Play',
        rating: '13+',
        duration: '2h 33m'
    },
    {
        title: 'Udaan',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/221c6de30cbbfa729760fbb648c2ce2967eef09996a2ae7b6f8b68c003de0a95._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Inspired by the book ‘Simply Fly’, the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets',
        year: '2021',
        info: 'Play',
        rating: '13+',
        duration: '2h 21m'
    },
    {
        title: '13 HOURS',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/dc9ce9b94d9e4b19336ae5fefc1c7e8c480959bd44ec725a1f0818d89ee6e91e._UR1920,1080_RI_SX356_FMjpg_.jpg',
        des: 'From director Michael Bay, 13 HOURS is the gripping true story of six elite ex-military operators assigned to protect the CIA who',
        year: '2016',
        info: 'Play',
        rating: '18+',
        duration: '2h 24m'
    },
    {
        title: 'Tenet',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/046307db4e7684ae32c1990bb985c9ec616077ed4f2fc89617ec5a41acec90e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Armed with only one word—Tenet—and fighting for the survival of the entire world, the Protagonist journeys through a twilight world ',
        year: '2020',
        info: 'Play',
        rating: '13+',
        duration: '2h 30m'
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/14bd952933c71ef46ce0db76674e8b70e70759ffba7eb90d6486935f9719ed8b._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Voldemort is tightening his grip on Hogwarts™ and it is no longer the safe haven it once was. Harry and Dumbledore work to find the key to',
        year: '2009',
        info: 'Play',
        rating: '13+',
        duration: '2h 33m'
    },
    {
        title: 'Udaan',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/221c6de30cbbfa729760fbb648c2ce2967eef09996a2ae7b6f8b68c003de0a95._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Inspired by the book ‘Simply Fly’, the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets',
        year: '2021',
        info: 'Play',
        rating: '13+',
        duration: '2h 21m'
    },
    {
        title: '13 HOURS',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/dc9ce9b94d9e4b19336ae5fefc1c7e8c480959bd44ec725a1f0818d89ee6e91e._UR1920,1080_RI_SX356_FMjpg_.jpg',
        des: 'From director Michael Bay, 13 HOURS is the gripping true story of six elite ex-military operators assigned to protect the CIA who',
        year: '2016',
        info: 'Play',
        rating: '18+',
        duration: '2h 24m'
    },
    {
        title: 'Tenet',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/046307db4e7684ae32c1990bb985c9ec616077ed4f2fc89617ec5a41acec90e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Armed with only one word—Tenet—and fighting for the survival of the entire world, the Protagonist journeys through a twilight world ',
        year: '2020',
        info: 'Play',
        rating: '13+',
        duration: '2h 30m'
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/14bd952933c71ef46ce0db76674e8b70e70759ffba7eb90d6486935f9719ed8b._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Voldemort is tightening his grip on Hogwarts™ and it is no longer the safe haven it once was. Harry and Dumbledore work to find the key to',
        year: '2009',
        info: 'Play',
        rating: '13+',
        duration: '2h 33m'
    },
    {
        title: 'Udaan',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/221c6de30cbbfa729760fbb648c2ce2967eef09996a2ae7b6f8b68c003de0a95._UR1920,1080_RI_SX356_FMwebp_.jpg',
        des: 'Inspired by the book ‘Simply Fly’, the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a teacher, who sets',
        year: '2021',
        info: 'Play',
        rating: '13+',
        duration: '2h 21m'
    },
    {
        title: '13 HOURS',
        pic: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/dc9ce9b94d9e4b19336ae5fefc1c7e8c480959bd44ec725a1f0818d89ee6e91e._UR1920,1080_RI_SX356_FMjpg_.jpg',
        des: 'From director Michael Bay, 13 HOURS is the gripping true story of six elite ex-military operators assigned to protect the CIA who',
        year: '2016',
        info: 'Play',
        rating: '18+',
        duration: '2h 24m'
    }
]

const viewby = [
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_HinDecRev/ac9ec8b4-a274-4250-9cdf-d5eb36801c6a._UR200,200_SX200_FMwebp_.jpg',
        language: 'Hindi'
    },
    {
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WatchInYourLanguageEnglishBoxartV2/15cfbfa1-3772-4c04-a87c-a31aab146ee5._UR200,200_SX200_FMwebp_.jpg',
        language: 'English'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TelDec/930aa201-7920-419a-be3b-19f851d66aae._UR200,200_SX200_FMwebp_.jpg',
        language: 'Telugu'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TamDec/fd303a3a-d4e9-4ff7-9437-d2fdc0736b8d._UR200,200_SX200_FMwebp_.jpg',
        language: 'Tamil'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PunjDec/3b313164-339a-4cb0-9435-ea335f995632._UR200,200_SX200_FMwebp_.jpg',
        language: 'Punjabi'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_MarDec/e813e13e-a867-4e5d-989f-c82e3c5be3da._UR200,200_SX200_FMwebp_.jpg',
        language: 'Marathi'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_HinDecRev/ac9ec8b4-a274-4250-9cdf-d5eb36801c6a._UR200,200_SX200_FMwebp_.jpg',
        language: 'Hindi'
    },
    {
        pic: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WatchInYourLanguageEnglishBoxartV2/15cfbfa1-3772-4c04-a87c-a31aab146ee5._UR200,200_SX200_FMwebp_.jpg',
        language: 'English'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TelDec/930aa201-7920-419a-be3b-19f851d66aae._UR200,200_SX200_FMwebp_.jpg',
        language: 'Telugu'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TamDec/fd303a3a-d4e9-4ff7-9437-d2fdc0736b8d._UR200,200_SX200_FMwebp_.jpg',
        language: 'Tamil'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PunjDec/3b313164-339a-4cb0-9435-ea335f995632._UR200,200_SX200_FMwebp_.jpg',
        language: 'Punjabi'
    },
    {
        pic: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_MarDec/e813e13e-a867-4e5d-989f-c82e3c5be3da._UR200,200_SX200_FMwebp_.jpg',
        language: 'Marathi'
    }
]

const MainCont = () => {
    return (
        <React.Fragment>
            <div className="main">
                <div className="watch-next">
                    <h2 className="sectionHead">Watch next TV and movies</h2>
                    <div className="items-section">
                        {
                            watchNext.map((item) => {
                                const { title, pic, des, year, info, rating } = item;
                                return (
                                    <div className="whole-card">
                                        <div className="card">
                                            <img src={pic} alt=""></img>
                                        </div>
                                        <div className="lowerCard">
                                            <div className="upper-card">
                                                <div>
                                                    <svg class="_2BDv3b" viewBox="0 0 36 36" style={{ fill: "#0f171e" }}><circle cx="18" cy="18" r="17"></circle><path style={{ fill: "white" }} d="M14.6821364,10.8388295 C14.0320227,10.4648523 13.4998636,10.7726932 13.4998636,11.5226932 L13.4998636,24.4772386 C13.4998636,25.2272386 14.0320227,25.5350795 14.6821364,25.1611023 L25.9542955,18.6797386 C26.6044091,18.3057614 26.6044091,17.6941705 25.9542955,17.3201932 L14.6821364,10.8388295 Z"></path></svg>
                                                    <h3>{info}</h3>
                                                </div>
                                                <div>
                                                    <img src={Plus} alt=""></img>
                                                    <svg viewBox="0 0 20 20" height="20px" width="20px"><defs></defs><path fill="currentColor" fill-rule="evenodd" d="M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2" transform="translate(-2 -2)"></path></svg>
                                                </div>
                                            </div>
                                            <div className="inner-card">
                                                <h3 style={{
                                                    color: "#8197a4"
                                                }}>Included with Prime</h3>
                                                <h3>{title}</h3>
                                                <p>{des}</p>
                                            </div>
                                            <div className="lower-card">
                                                <p>{year}</p>
                                                <svg viewBox="0 0 20 22" height="22" width="20" role="img" aria-hidden="true" ><title>Subtitles</title><svg width="20" height="22"><g fill="none" fill-rule="evenodd" vector-effect="non-scaling-stroke"><path d="M3.5 20.793L5.793 18.5H18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 18 4.5H2A1.5 1.5 0 0 0 .5 6v11A1.5 1.5 0 0 0 2 18.5h1.5v2.293z" stroke="currentColor" fill-opacity=".1" fill-rule="nonzero"></path><path d="M4 13.5h12m-10 2h8" stroke="currentColor" stroke-linecap="round"></path></g></svg><title>Subtitles</title></svg>
                                                <div className="rating">{rating}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="recommended">
                    <h2 className="sectionHead">Recommended Movies</h2>
                    <div className="items-section">
                        {
                            Recommended.map((item) => {
                                const { title, pic, des, year, info, rating, duration } = item;
                                return (
                                    <div className="whole-card">
                                        <div className="card">
                                            <img src={pic} alt=""></img>
                                        </div>
                                        <div className="lowerCard">
                                            <div className="upper-card">
                                                <div>
                                                    <svg class="_2BDv3b" viewBox="0 0 36 36" style={{ fill: "#0f171e" }}><circle cx="18" cy="18" r="17"></circle><path style={{ fill: "white" }} d="M14.6821364,10.8388295 C14.0320227,10.4648523 13.4998636,10.7726932 13.4998636,11.5226932 L13.4998636,24.4772386 C13.4998636,25.2272386 14.0320227,25.5350795 14.6821364,25.1611023 L25.9542955,18.6797386 C26.6044091,18.3057614 26.6044091,17.6941705 25.9542955,17.3201932 L14.6821364,10.8388295 Z"></path></svg>
                                                    <h3>{info}</h3>
                                                </div>
                                                <div>
                                                    <img src={Plus} alt=""></img>
                                                    <svg viewBox="0 0 20 20" height="20px" width="20px"><defs></defs><path fill="currentColor" fill-rule="evenodd" d="M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2" transform="translate(-2 -2)"></path></svg>
                                                </div>
                                            </div>
                                            <div className="inner-card">
                                                <h3 style={{
                                                    color: "#8197a4"
                                                }}>Included with Prime</h3>
                                                <h3>{title}</h3>
                                                <p>{des}</p>
                                            </div>
                                            <div className="lower-card" style={{ width: "60%" }}>
                                                <p>{duration}</p>
                                                <p>{year}</p>
                                                <svg viewBox="0 0 20 22" height="22" width="20" role="img" aria-hidden="true" ><title>Subtitles</title><svg width="20" height="22"><g fill="none" fill-rule="evenodd" vector-effect="non-scaling-stroke"><path d="M3.5 20.793L5.793 18.5H18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 18 4.5H2A1.5 1.5 0 0 0 .5 6v11A1.5 1.5 0 0 0 2 18.5h1.5v2.293z" stroke="currentColor" fill-opacity=".1" fill-rule="nonzero"></path><path d="M4 13.5h12m-10 2h8" stroke="currentColor" stroke-linecap="round"></path></g></svg><title>Subtitles</title></svg>
                                                <div className="rating">{rating}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="recommended">
                    <h2 className="sectionHead">Watch in Your Language</h2>
                    <div className="items-section bo">
                        {
                            viewby.map((item) => {
                                const { language, pic } = item;
                                return (
                                    <div className="photo">
                                        <img src={pic} alt=""></img>
                                        <div className="mask"></div>
                                        <p>{language}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="preview">
                    <div className="preview-heading">
                        <h2> <img src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4._CB509553088_.png"></img>  Previews for you</h2>
                        <p>Selected for you based on your viewing</p>
                    </div>
                    <div className="container">
                        <div className="left-cont">
                            <h1>Sonu Ke Titu Ki Sweety</h1>
                            <div className="previewBtns">
                                <button>
                                    <svg width="24" height="24" ><title>Play Arrow</title><path d="M4.576 2.452C3.71 1.953 3 2.364 3 3.364v17.272c0 1 .71 1.41 1.576.912l15.03-8.642c.867-.498.867-1.314 0-1.812L4.576 2.452z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                    <h3>Play</h3>
                                </button>
                                <div className="circle">
                                    <svg viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true" style={{ height: "24px", width: "24px" }}><title>Add</title><svg width="24" height="24" ><title>Add</title><path d="M3 12h18m-9 9V3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"></path></svg></svg>
                                </div>
                                <div className="circle">
                                    <svg viewBox="0 0 24 24" height="24" width="24" role="img" style={{ height: "24px", width: "24px" }} aria-hidden="true"><title>Info</title><svg width="24" height="24" ><title>Info</title><g fill="none" fill-rule="evenodd"><path d="M11 10.097c0-.603.439-1.097.976-1.097h.049c.536 0 .975.494.975 1.097v6.805c0 .604-.439 1.098-.975 1.098h-.05c-.536 0-.975-.494-.975-1.098v-6.805zM11 6h2v2h-2z" fill="currentColor"></path><circle stroke="currentColor" stroke-width="2" cx="12" cy="12" r="9"></circle></g></svg></svg>
                                </div>
                                <div className="rating-genre">
                                    <div className="rating">
                                        13+
                                </div>
                                    <p>International</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-cont">
                            <video src="https://s3-iad-2.cf.trailer.row.aiv-cdn.net/7549/f793/a934/454f-b0a4-e4cbbd547928/bcb2e6ac-eb6d-46e6-a84e-1f0065f10cff_video_6000_audio_aaclc_128.mp4?Expires=1619293368&amp;Signature=ISh3N4~VfssGgr~AwOFkfZ~2BY6GGZG9Uyc61bC2hkbQTV5kpKMSYlv8Knv7HNoy16ciLs-ZCz-~XywDSTE9Zu8ZztLzP7HzzYVs0TZnj51V6qBq4PBVD9Wr2VVsEI854UdOop5hl-Xv0U4rw~xVh1aJEprZ1WFk6ZVpV6ZsSIWKbu98TqPV-pkTkLU5Ssqpt1qX1naEl8EubeAVDEjOml2ETV8TPWZe53LjHlkrZSZBXUWtAkeKUog-hFQRAzeCf8sFYrztw04JQc~5Uehmz9eyCpr4EZ5Bo0iXW2KUB1XpuZ-OOxqvUJgeReFFD1Jzv~sXNkmbiLgyJijHiUIaOw__&amp;Key-Pair-Id=APKAJIYEUF5P2E3CCYTA" preload="auto" autoPlay={true} ></video>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDczIiBoZWlnaHQ9IjE0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMTQuODMgOTIuMzY2Yy4xNTgtMS4wMjMuOTY3LTEuODAyIDIuMDkxLTEuODAyLjUyNCAwIDEuMTE4LjE3MSAxLjc0NC41NjIgMzQuNzMxIDIxLjc4MSA3Ny42OTcgMzQuOTAzIDEyMi4wNjcgMzQuOTAzIDI5Ljk0MyAwIDYyLjg0MS02LjcwMSA5My4xMTctMjAuNTQ0IDQuNTYzLTIuMDc5IDguMzg2IDMuMjM5IDMuOTIyIDYuODExLTI3LjAwOCAyMS40NzItNjYuMTYzIDMyLjg5Ny05OS44NzkgMzIuODk3LTQ3LjI0OCAwLTg5Ljc5NS0xOC44My0xMjIuMDA0LTUwLjE2OC0uNjMyLS42MTQtLjk2NC0xLjI4Ny0xLjA1OC0xLjkxOXYtLjc0eiIvPjxwYXRoIGQ9Ik0zMTUuNDkzIDk1Ljc1MWM3Ljk4Ni02LjAzIDE4LjYwNC04LjA0MiAyNy40MDgtOC4wNDIgOC4yMzUgMCAxNC44ODYgMS43NjMgMTYuMzAyIDMuNjQ4IDIuOTc2IDMuOTMzLS43NjYgMzEuMjAxLTE1LjI2MSA0NC4yMDYtMi4yMTggMi4wMTQtNC4zMjguOTI5LTMuMzUtMS42OTkgMy4yNTktOC43MjIgMTAuNTUzLTI4LjMwNiA3LjA5Ni0zMy4wNTQtMy40NTItNC43NTktMjIuODM1LTIuMjY4LTMxLjUyNy0xLjE0NS0xLjM0Ny4xNzEtMi4xMTMtLjM4LTIuMjI1LTEuMjAxdi0uNDQzYy4wOTEtLjcxMi41OTYtMS41NDMgMS41NTctMi4yN3pNNDUwLjM1OSAxOS44NjNjNy4xIDAgMTIuNjQ4IDIuMTUyIDE2LjY0NSA2LjQ1NkM0NzEuMDAxIDMwLjYyMiA0NzMgMzYuNTk2IDQ3MyA0NC4yNDFjMCA3LjcwNC0xLjk5OSAxMy43MDgtNS45OTYgMTguMDEyLTMuOTk3IDQuMzA0LTkuNTQ1IDYuNDU2LTE2LjY0NSA2LjQ1Ni03LjA5OSAwLTEyLjY0OC0yLjE1Mi0xNi42NDUtNi40NTZzLTUuOTk2LTEwLjMwOC01Ljk5Ni0xOC4wMTJjMC03LjY0NSAxLjk5OS0xMy42MTkgNS45OTYtMTcuOTIyIDMuOTk3LTQuMzA0IDkuNTQ2LTYuNDU2IDE2LjY0NS02LjQ1NnptMCAxMC4xMTJjLTYuMjY0IDAtOS4zOTYgNC43NTUtOS4zOTYgMTQuMjY2IDAgOS41NyAzLjEzMiAxNC4zNTUgOS4zOTYgMTQuMzU1IDYuMjY0IDAgOS4zOTctNC43ODUgOS4zOTctMTQuMzU1IDAtOS41MTEtMy4xMzMtMTQuMjY2LTkuMzk3LTE0LjI2NnpNNDAzLjE5MSAyMC4yOWM1LjQzMiAwIDkuNjg0IDEuMzI4IDEyLjc0NyAzLjk4NCAzLjA2NCAyLjY1NyA0LjU5OSA2LjIwMSA0LjU5OSAxMC42MjYgMCA0LjQzMi0xLjY1MyA3Ljc4Mi00Ljk0NSAxMC4wNTEtMy4zIDIuMjc1LTguMTY0IDMuNDEtMTQuNTg2IDMuNDEtMy4zMjkgMC02LjIyMy0uMzIxLTguNjczLS45Ny4zNDcgMy45NTQgMS41MzUgNi43OSAzLjU1IDguNDk5IDIuMDE1IDEuNzA4IDUuMDY0IDIuNTY2IDkuMTUzIDIuNTY2IDEuNjMxIDAgMy4yMjYtLjEwNCA0Ljc3Ni0uMzEzIDEuNTQzLS4yMDIgMy42OTEtLjY2NCA2LjQzNy0xLjM2Ni4xNjktLjA1OS4zNDYtLjEwNC41MjQtLjEzNC4xNzctLjAzLjMxNy0uMDQ1LjQzNS0uMDQ1Ljk5NyAwIDEuNDkxLjY3OSAxLjQ5MSAyLjAzN3Y0LjA3NWMwIC45NC0uMTMzIDEuNjA0LS4zOTEgMS45OTItLjI2Ni4zOC0uNzc1LjcyNC0xLjUzNSAxLjAxNS00LjI2NyAxLjY0OS04Ljc5MiAyLjQ3Ny0xMy41ODIgMi40NzctNy4yNDEgMC0xMi44LTItMTYuNjgyLTYuMDIyLTMuODgzLTQuMDE0LTUuODI0LTkuNzY3LTUuODI0LTE3LjI2NiAwLTcuNjcxIDEuOTg1LTEzLjY5MiA1Ljk1Ni0xOC4wNTggMy45NzItNC4zNzIgOS40ODYtNi41NTggMTYuNTUtNi41NTh6bS0uOTYgOC45NDZjLTUuNjEgMC04Ljg1IDMuNDg1LTkuNzIxIDEwLjQ0NyAyLjMzMi40NzcgNC45MzEuNzA5IDcuNzk1LjcwOSAyLjk3NCAwIDUuMTM3LS40NTYgNi40OC0xLjM3MyAxLjM0NC0uOTExIDIuMDE2LTIuMzE0IDIuMDE2LTQuMjAxIDAtMy43MjQtMi4xOTMtNS41ODItNi41Ny01LjU4MnpNMzY5LjA2OS41NDJjLjgzNSAwIDEuNDE3LjE2NSAxLjc0NS40OTYuMzI4LjMzMS40OTIuOTE4LjQ5MiAxLjc2MXY2Mi4yOThjMCAuNzgzLS4xNjQgMS4zNTQtLjQ5MiAxLjcxNi0uMzI4LjM2MS0uOTEuNTQxLTEuNzQ1LjU0MWgtNy4xNTljLS43MTYgMC0xLjI2OC0uMTUtMS42NTYtLjQ1MS0uMzg3LS4zMDEtLjY3MS0uODEzLS44NS0xLjUzNWwtLjUzNy0yLjA3N2MtMy42OTkgMy4zNzEtOC4wODMgNS4wNTYtMTMuMTU1IDUuMDU2LTMuODc3IDAtNy4yNDgtMS4wMDgtMTAuMTEyLTMuMDI0LTIuODY0LTIuMDE3LTUuMDU2LTQuODE1LTYuNTc3LTguMzk3LTEuNTIyLTMuNTgxLTIuMjgyLTcuNzE5LTIuMjgyLTEyLjQxNCAwLTcuNDY0IDEuNzU5LTEzLjQzOCA1LjI3OS0xNy45MjIgMy41Mi00LjQ4NSA4LjE3NC02LjcyNyAxMy45NjEtNi43MjcgNC43MTMgMCA4LjggMS4zNTQgMTIuMjYgNC4wNjNWMi43OTljMC0uODQzLjE3OS0xLjQzLjUzNy0xLjc2MS4zNTgtLjMzMS45MjUtLjQ5NiAxLjctLjQ5Nmg4LjU5MXptLTE5LjY4OCAyOS4yNTNjLTMuMTYyIDAtNS41MTggMS4xODktNy4wNjkgMy41NjYtMS41NTEgMi4zNzgtMi4zMjcgNS45NzQtMi4zMjcgMTAuNzg5IDAgNC44MTYuODIgOC4zOTcgMi40NjEgMTAuNzQ1IDEuNjQxIDIuMzQ3IDQuMTYxIDMuNTIxIDcuNTYyIDMuNTIxIDIuODY0IDAgNS42MDgtLjg0MyA4LjIzMy0yLjUyOFYzMi4wNTJjLTIuNTY1LTEuNTA1LTUuNTE5LTIuMjU3LTguODYtMi4yNTd6TTMwNy4zMjMgNjcuMzU0Yy0uNzc2IDAtMS4zNDMtLjE4LTEuNzAxLS41NDEtLjM1OC0uMzYyLS41MzctLjkzMy0uNTM3LTEuNzE2VjIzLjQ3NWMwLS44NDMuMTc5LTEuNDMuNTM3LTEuNzYxLjM1OC0uMzMxLjkyNS0uNDk3IDEuNzAxLS40OTdoOC41OTFjLjgzNSAwIDEuNDE3LjE2NiAxLjc0NS40OTcuMzI4LjMzMS40OTIuOTE4LjQ5MiAxLjc2MXY0MS42MjJjMCAuNzgzLS4xNjQgMS4zNTQtLjQ5MiAxLjcxNi0uMzI4LjM2MS0uOTEuNTQxLTEuNzQ1LjU0MWgtOC41OTF6TTMxMS42MTggMTQuMDg1Yy0yLjI2NyAwLTQuMDg3LS42MzItNS40NTktMS44OTYtMS4zNzItMS4yNjQtMi4wNTgtMi45OC0yLjA1OC01LjE0NyAwLTIuMTY2LjY4Ni0zLjg4MiAyLjA1OC01LjE0NkMzMDcuNTMxLjYzMiAzMDkuMzUxIDAgMzExLjYxOCAwYzIuMjY3IDAgNC4wODcuNjMyIDUuNDU5IDEuODk2IDEuMzcyIDEuMjY0IDIuMDU4IDIuOTggMi4wNTggNS4xNDYgMCAyLjE2Ny0uNjg2IDMuODgzLTIuMDU4IDUuMTQ3LTEuMzcyIDEuMjY0LTMuMTkyIDEuODk2LTUuNDU5IDEuODk2ek0yNzEuODIyIDY3LjM1NGMtLjU5NyAwLTEuMDg5LS4wNzUtMS40NzctLjIyNWEyLjM0IDIuMzQgMCAwMS0uOTg0LS43MjNjLS4yNjktLjMzMS0uNTIyLS43OTctLjc2MS0xLjM5OWwtMTUuMzAzLTQwLjE3OGEzNi43MjQgMzYuNzI0IDAgMDEtLjQ0Ny0xLjI2NCAzLjE5NiAzLjE5NiAwIDAxLS4xNzktLjk5M2MwLS45MDMuNTk3LTEuMzU1IDEuNzktMS4zNTVoOC45NDljLjk1NCAwIDEuNjU1LjE4MSAyLjEwMy41NDIuNDQ3LjM2MS43OS45NjMgMS4wMjkgMS44MDZsOS4yMTcgMzEuOTYyIDkuMzk3LTMxLjk2MmMuMjM4LS44NDMuNTgxLTEuNDQ1IDEuMDI5LTEuODA2LjQ0Ny0uMzYxIDEuMTQ4LS41NDIgMi4xMDMtLjU0Mmg4LjY4YzEuMTk0IDAgMS43OS40NTIgMS43OSAxLjM1NSAwIC4zMDEtLjA1OS42MzItLjE3OS45OTMtLjExOS4zNjEtLjI2OC43ODItLjQ0NyAxLjI2NGwtMTUuMzAzIDQwLjE3OGMtLjIzOS42MDItLjQ5MiAxLjA2OC0uNzYxIDEuMzk5YTIuNDA2IDIuNDA2IDAgMDEtLjkzOS43MjNjLS4zNTguMTUtLjg2NS4yMjUtMS41MjIuMjI1aC03Ljc4NXpNMjE0LjcxNyAxOS44NjljNS41NzQgMCA5LjkzNiAxLjM1NSAxMy4wNzkgNC4wNjUgMy4xNDIgMi43MSA0LjcxOCA2LjMyNiA0LjcxOCAxMC44NCAwIDQuNTIxLTEuNjk3IDcuOTM5LTUuMDc0IDEwLjI1My0zLjM4NiAyLjMyMi04LjM3NiAzLjQ3OS0xNC45NjUgMy40NzktMy40MTUgMC02LjM4NC0uMzI4LTguODk4LS45OS4zNTYgNC4wMzUgMS41NzUgNi45MjcgMy42NDMgOC42NyAyLjA2NyAxLjc0NCA1LjE5NSAyLjYxOSA5LjM5IDIuNjE5IDEuNjc0IDAgMy4zMS0uMTA3IDQuOS0uMzIgMS41ODMtLjIwNSAzLjc4Ni0uNjc3IDYuNjA0LTEuMzkzYTMuMzMgMy4zMyAwIDAxLjUzNy0uMTM3Yy4xODItLjAzLjMyNi0uMDQ2LjQ0Ny0uMDQ2IDEuMDIyIDAgMS41My42OTMgMS41MyAyLjA3OXY0LjE1NmMwIC45NTktLjEzNyAxLjYzNi0uNDAyIDIuMDMyLS4yNzIuMzg4LS43OTUuNzM5LTEuNTc1IDEuMDM1LTQuMzc3IDEuNjgzLTkuMDE5IDIuNTI4LTEzLjkzNCAyLjUyOC03LjQyOSAwLTEzLjEzMi0yLjA0LTE3LjExNS02LjE0My0zLjk4NC00LjA5Ni01Ljk3NS05Ljk2NC01Ljk3NS0xNy42MTUgMC03LjgyNSAyLjAzNy0xMy45NjggNi4xMTEtMTguNDIxIDQuMDc0LTQuNDYxIDkuNzMyLTYuNjkxIDE2Ljk3OS02LjY5MXptLS45ODUgOS4xMjdjLTUuNzU1IDAtOS4wOCAzLjU1NS05Ljk3MyAxMC42NTcgMi4zOTMuNDg3IDUuMDU5LjcyMyA3Ljk5Ny43MjMgMy4wNTIgMCA1LjI3MS0uNDY0IDYuNjQ5LTEuNDAxIDEuMzc4LS45MjggMi4wNjctMi4zNTkgMi4wNjctNC4yODUgMC0zLjc5OS0yLjI0OS01LjY5NC02Ljc0LTUuNjk0ek0xMjYuMDIzIDI1LjY1NGMzLjE3My0yLjEwOSA2LjAzNi0zLjYwMSA4LjU4LTQuNDY5YTI0LjA2MyAyNC4wNjMgMCAwMTcuODY5LTEuMzE3YzUuMzkyIDAgOS4xOTMgMS45MzQgMTEuNDEyIDUuNzg2IDMuMDUyLTIuMDQ4IDUuOTMtMy41MjUgOC42MjYtNC40MjNhMjYuMDY0IDI2LjA2NCAwIDAxOC4zNTMtMS4zNjNjNC4xOTUgMCA3LjQ0NCAxLjE4IDkuNzU0IDMuNTI1IDIuMzAyIDIuMzUyIDMuNDYxIDUuNjMzIDMuNDYxIDkuODVWNjUuMTNjMCAuNzg0LS4xNjcgMS4zNTUtLjQ5MiAxLjcxMy0uMzM0LjM2NS0uOTE3LjU0LTEuNzU3LjU0aC04LjYyNmMtLjc4IDAtMS4zNDgtLjE3NS0xLjcwNC0uNTQtLjM2My0uMzU4LS41NDUtLjkyOS0uNTQ1LTEuNzEzVjM2LjEzNWMwLTQuMDk1LTEuODI1LTYuMTQzLTUuNDgzLTYuMTQzLTMuMjM0IDAtNi40OTguNzc3LTkuNzkyIDIuMzQ1VjY1LjEzYzAgLjc4NC0uMTY3IDEuMzU1LS40OTIgMS43MTMtLjMzMy4zNjUtLjkxNy41NC0xLjc1Ny41NGgtOC42MjZjLS43OCAwLTEuMzQ4LS4xNzUtMS43MDQtLjU0LS4zNjMtLjM1OC0uNTM3LS45MjktLjUzNy0xLjcxM1YzNi4xMzVjMC00LjA5NS0xLjgzMy02LjE0My01LjQ4My02LjE0My0zLjM1NSAwLTYuNjQ5LjgwNy05Ljg5MSAyLjQzNlY2NS4xM2MwIC43ODQtLjE2NiAxLjM1NS0uNDkyIDEuNzEzLS4zMzMuMzY1LS45MTYuNTQtMS43NDkuNTRoLTguNjM0Yy0uNzcyIDAtMS4zNDgtLjE3NS0xLjcwMy0uNTQtLjM1Ni0uMzU4LS41MzgtLjkyOS0uNTM4LTEuNzEzVjIzLjQ4NGMwLS44NDUuMTgyLTEuNDMxLjUzOC0xLjc1OC4zNTUtLjMzNS45MzEtLjQ5NSAxLjcwMy0uNDk1aDYuNDc1YzEuMzc5IDAgMi4yMTIuNjYyIDIuNTE1IDEuOTg3bC43MTkgMi40MzZ6TTg5LjgyNSAyMy40ODZjMC0uODQ1LjE4Mi0xLjQzMS41MzgtMS43NTkuMzY0LS4zMzUuOTMyLS41MDIgMS43MTItLjUwMmg4LjYyNWMuODQxIDAgMS40MjQuMTY3IDEuNzUuNTAyLjMzMy4zMjguNS45MTQuNSAxLjc1OXY0MS42MzhjMCAuNzg0LS4xNjcgMS4zNjItLjUgMS43Mi0uMzI2LjM1OC0uOTA5LjU0MS0xLjc1LjU0MWgtOC42MjVjLS43OCAwLTEuMzQ4LS4xODMtMS43MTItLjU0MS0uMzU2LS4zNTgtLjUzOC0uOTM2LS41MzgtMS43MlYyMy40ODZ6TTk2LjM4NCAxNC4wOTJjLTIuMjggMC00LjEwNS0uNjMyLTUuNDgzLTEuODk1LTEuMzc4LTEuMjcxLTIuMDYtMi45ODQtMi4wNi01LjE1NCAwLTIuMTY5LjY4Mi0zLjg4MiAyLjA2LTUuMTQ1QzkyLjI3OS42MzQgOTQuMTA0LjAwMiA5Ni4zODQuMDAyYzIuMjc5IDAgNC4xMDQuNjMyIDUuNDgzIDEuODk2IDEuMzc4IDEuMjYzIDIuMDY3IDIuOTc2IDIuMDY3IDUuMTQ1IDAgMi4xNy0uNjg5IDMuODgzLTIuMDY3IDUuMTU0LTEuMzc5IDEuMjYzLTMuMjA0IDEuODk1LTUuNDgzIDEuODk1ek02Ni4zMTYgMjguMDkyYzIuMzkzLTIuNjQ5IDQuNjU3LTQuNTI5IDYuNzg1LTUuNjQ4YTE0LjQ0MSAxNC40NDEgMCAwMTYuNzg2LTEuNjY3aDEuMjU3Yy44NCAwIDEuNDM5LjE2OCAxLjc5NS40OTUuMzYzLjMzNS41MzcuOTIxLjUzNyAxLjc1OHY3LjU5YzAgLjc4NC0uMTU5IDEuMzU1LS40OTIgMS43Mi0uMzI2LjM1OC0uOTA5LjU0LTEuNzQ5LjU0LS40MjQgMC0uOTYyLS4wMy0xLjYyMS0uMDkxYTI4LjI2NiAyOC4yNjYgMCAwMC0yLjUxNC0uMDkxYy0xLjM3OSAwLTMuMDUyLjE5OC01LjAzNi41ODYtMS45NzcuMzk2LTMuNjUxLjg5LTUuMDI5IDEuNDkydjMwLjM0OWMwIC43ODQtLjE2NiAxLjM1NS0uNDkyIDEuNzIxLS4zMzMuMzU3LS45MTYuNTQtMS43NTcuNTRINTYuMTZjLS43OCAwLTEuMzQ4LS4xODMtMS43MDQtLjU0LS4zNjMtLjM2Ni0uNTQ1LS45MzctLjU0NS0xLjcyMVYyMy40ODdjMC0uODQ1LjE4Mi0xLjQzMS41NDUtMS43NjYuMzU2LS4zMjcuOTI0LS40OTUgMS43MDQtLjQ5NWg2LjQ2OGMxLjM3OCAwIDIuMjE5LjY2MyAyLjUyMiAxLjk4N2wxLjE2NiA0Ljg3OXpNMjYuMjQ4IDE5Ljg3NWM1LjgwOCAwIDEwLjQwNSAyLjEzOSAxMy43OSA2LjQxIDMuMzg1IDQuMjc4IDUuMDgyIDEwLjA1NSA1LjA4MiAxNy4zNDggMCA0Ljk5My0uODQxIDkuMzYyLTIuNTE1IDEzLjA5Mi0xLjY4MSAzLjczOC0zLjk2IDYuNjE1LTYuODMxIDguNjI1LTIuODc3IDIuMDI1LTYuMTcyIDMuMDI5LTkuODkgMy4wMjktMi40NTQgMC00Ljc5NC0uMzg4LTcuMDA1LTEuMTcyLTIuMjE5LS43ODQtNC4xMDUtMS44NjUtNS42NjUtMy4yNXYxOS43NzZjMCAuODQ1LS4xNjYgMS40MzEtLjQ5MiAxLjc2Ni0uMzMzLjMyNy0uOTE2LjQ5NS0xLjc1Ny40OTVIMi4zNGMtLjc4IDAtMS4zNDgtLjE2OC0xLjcwNC0uNDk1LS4zNjQtLjMzNS0uNTQ2LS45MjEtLjU0Ni0xLjc2NnYtNjAuMjVjMC0uODM3LjE4Mi0xLjQyMy41NDYtMS43NTguMzU2LS4zMzUuOTI0LS40OTUgMS43MDQtLjQ5NWg2LjQ3NGMxLjM3OSAwIDIuMjEyLjY2MiAyLjUxNSAxLjk4N2wuNjI4IDIuMzQ0YzEuNzk1LTEuNzQzIDMuOTY5LTMuMTI4IDYuNTEzLTQuMTU2IDIuNTQ1LTEuMDIgNS4xNDItMS41MyA3Ljc3OC0xLjUzem0tNC4yMjYgOS45MzRjLTMuMTEzIDAtNi4wNTEuODE0LTguODA4IDIuNDM2djIzLjc1N2MyLjYzNiAxLjYyOSA1LjU3NCAyLjQ0NCA4LjgwOCAyLjQ0NCAzLjM1NSAwIDUuODI0LTEuMTQyIDcuNDE0LTMuNDMzIDEuNTktMi4yOTIgMi4zODUtNS45IDIuMzg1LTEwLjg0IDAtNS4wMDEtLjc4LTguNjQtMi4zNC0xMC45MzEtMS41Ni0yLjI5MS00LjA0NC0zLjQzMy03LjQ1OS0zLjQzM3oiLz48L2c+PC9zdmc+"></img>
                    <div className="footer-links">
                        <ul className="links-footer">
                            <li className="footer-links-item">Terms and Privacy Notice</li>
                            <li className="footer-links-item">Send us feedback</li>
                            <li className="footer-links-item">Help</li>
                            <li className="footer-links-item dim" >© 1996-2021, Amazon.com, Inc. or its affiliates</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Main;

