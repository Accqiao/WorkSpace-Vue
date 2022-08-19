<template>
    <el-row :gutter="20">
        <el-col :span="2">
            <el-button type="success" :icon="TopLeft" circle plain @click="handleRestore" />
        </el-col>
        <el-col :span="20">
            <span>{{ props.item.content }}</span>
                <br />
            <span>{{ props.item.mark }}</span>
        </el-col>
        <el-col :span="2">
            <el-button type="danger" :icon="Delete" circle plain @click="handleDelete" />
        </el-col>
    </el-row>
</template>

<script lang='ts' setup>
import { TopLeft, Delete} from '@element-plus/icons-vue'
import { defineProps, ref, inject } from 'vue'
import { Post_RealDelete, Post_Change } from '@/services/Api_todoList'
import { ElMessage } from 'element-plus'

interface Props {
    item: {
        id: string,
        content: string,
        mark: string,
        finish: boolean,
        delete: boolean,
        updateTime: string,
        createTime: string,
    },
}
const props = defineProps<Props>()
const changeTabs = inject('changeTabs')
const handleRestore = () => {
    let sign: boolean = Post__Restore(props.item.id, 'delete', 0)
    if (sign) {
        ElMessage({
            message: '还原成功 !',
            type: 'success',
            center: true,
            showClose: true,
        })
        changeTabs("all")
    } else {
        ElMessage({
            message: '还原失败，请稍后再试 !',
            grouping: true,
            type: 'error',
            center: true,
            showClose: true,
        })
    }
}
const handleDelete = () => {
    let sign: boolean = Post__RealDelete(props.item.id)
    if (sign) {
        ElMessage({
            message: '删除成功 !',
            type: 'success',
            center: true,
            showClose: true,
        })
    } else {
        ElMessage({
            message: '删除失败，请稍后再试 !',
            grouping: true,
            type: 'error',
            center: true,
            showClose: true,
        })
    }
}

const Post__RealDelete = async (id: string) => {
    const res: any = await Post_RealDelete({ id })
    return res.isOK;
}

const Post__Restore = async (id: string, type: string, sign: number) => {
    const res: any = await Post_Change({ id, type, sign })
    return res.isOK;
}

</script>

<style>
</style>